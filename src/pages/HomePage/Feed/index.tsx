import React, { SetStateAction, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

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
  const [tweetsAll, setTweetsAll] = useState<TweetType[] | TweetType>([]);
  const { tweetId } = useParams();

  useEffect(() => {
    setLoading(true);

    const getTweets = async () => {
      let tweets: TweetType;
      if (tweetId) {
        tweets = await getUserTweets([tweetId])as unknown as TweetType;
      } else {
        tweets = await getAllTweets() as unknown as TweetType;
      }
      setTweetsAll(tweets);
      setLoading(false);
    };
    getTweets();
  }, [user && user.tweets?.length, tweetId]);

  if (!user) {
    return <Loader />;
  }

  return (
    <div>
      <HeaderProfile />
      {!tweetId && <TweetForm />}
      {loading ? <Loader /> : <ViewTweets data={tweetsAll as TweetType[]} />}
    </div>
  );
};
