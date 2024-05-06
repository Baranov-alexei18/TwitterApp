import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Timestamp } from 'firebase/firestore';

import { TweetForm } from '@/components/TweetForm';
import { Loader } from '@/components/ui-components/Loader';
import { ViewTweets } from '@/components/ViewTweets';
import { TweetType } from '@/components/ViewTweets/types';
import { getAllTweets } from '@/services/firestore/getAllTweets';
import { getUserTweets } from '@/services/firestore/getUserTweets';
import { UserState } from '@/types/user';
import { getUniqueDocs } from '@/utils/getUniqueDocs';

import { HeaderProfile } from './Header';
import { IntersectionDiv } from './styles';

export const Feed = () => {
  const user = useSelector((state: UserState) => state.user.data);
  const [loading, setLoading] = useState(false);
  const [tweetsAll, setTweetsAll] = useState<TweetType[]>([]);
  const [lastDoc, setLastDoc] = useState<Timestamp | null>(null);
  const { tweetId } = useParams();
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getTweets();
  }, [user && user.tweets?.length, tweetId]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        const sentinel = entries[0];
        if (sentinel.isIntersecting && !loading && !tweetId) {
          fetchMoreTweets();
        }
      },
      { threshold: 0.6 },
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, [loading]);

  const getTweets = async () => {
    setLoading(true);
    try {
      let tweets: TweetType[];
      setTweetsAll([]);
      setLastDoc(null);

      if (tweetId) {
        const tweet = await getUserTweets([tweetId]) as TweetType[];
        setTweetsAll(tweet);
        return;
      }
      const nextTweets = await getAllTweets(lastDoc) as TweetType[];

      if (nextTweets.length > 0) {
        setLastDoc(nextTweets[nextTweets.length - 1].date_created);
        tweets = [...tweetsAll, ...nextTweets];
      } else {
        tweets = nextTweets;
      }

      const uniqueTweets = getUniqueDocs('tweet_id', ...tweets!);

      setTweetsAll(uniqueTweets);
    } catch (error) {
      console.error('Ошибка при загрузке твитов:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMoreTweets = async () => {
    if (!tweetsAll.length || tweetId) return;
    try {
      setLoading(true);

      const lastTweet = tweetsAll[tweetsAll.length - 1];
      const nextTweets = await getAllTweets(lastTweet.date_created) as unknown as TweetType[];
      setTweetsAll((prevTweets) => [...prevTweets, ...nextTweets]);
    } catch (error) {
      console.error('Ошибка при загрузке новых твитов:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return <Loader />;
  }

  return (
    <>
      <HeaderProfile />
      {!tweetId && <TweetForm />}
      <ViewTweets data={tweetsAll} />
      <IntersectionDiv ref={sentinelRef} />
      {loading && <Loader />}
    </>
  );
};
