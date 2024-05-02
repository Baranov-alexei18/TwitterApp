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

import { HeaderProfile } from './Header';

export const Feed = () => {
  const user = useSelector((state: UserState) => state.user.data);
  const [loading, setLoading] = useState(false);
  const [tweetsAll, setTweetsAll] = useState<TweetType[]>([]);
  const [lastDoc, setLastDoc] = useState<Timestamp | null>(null);
  const { tweetId } = useParams();
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoading(true);

    const getTweets = async () => {
      try {
        let tweets: TweetType[];
        if (tweetId) {
          setTweetsAll([]);
          setLastDoc(null);
          tweets = await getUserTweets([tweetId]) as TweetType[];
        } else {
          const nextTweets = await getAllTweets(lastDoc) as TweetType[];

          if (nextTweets.length > 0) {
            setLastDoc(nextTweets[nextTweets.length - 1].date_created);
            tweets = [...tweetsAll, ...nextTweets];
          } else {
            tweets = nextTweets;
          }
        }
        setTweetsAll(tweets);
      } catch (error) {
        console.error('Ошибка при загрузке твитов:', error);
      } finally {
        setLoading(false);
      }
    };

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
      { threshold: 1 },
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

  const fetchMoreTweets = async () => {
    if (!tweetsAll.length) return;
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
    <div>
      <HeaderProfile />
      {!tweetId && <TweetForm />}
      <ViewTweets data={tweetsAll} />
      <div ref={sentinelRef} />
      {loading && <Loader />}
    </div>
  );
};
