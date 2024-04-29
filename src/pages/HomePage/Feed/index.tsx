import React, { SetStateAction, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

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
  const [tweetsAll, setTweetsAll] = useState<TweetType[] | TweetType>([]);

  useEffect(() => {
    const getTweets = async () => {
      const tweets = await getAllTweets() as unknown as TweetType;
      setTweetsAll(tweets);
    };
    getTweets();
  }, [user && user.tweets?.length]);

  if (!user) {
    return <Loader />;
  }

  return (
    <div>
      <HeaderProfile />
      <TweetForm />
      {!tweetsAll
        ? <Loader />
        : <ViewTweets data={tweetsAll as TweetType[]} />}
    </div>
  );
};
