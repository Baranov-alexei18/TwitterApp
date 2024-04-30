import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { TweetForm } from '@/components/TweetForm';
import { Loader } from '@/components/ui-components/Loader';
import { Title } from '@/components/ui-components/Title';
import { ViewTweets } from '@/components/ViewTweets';
import { TweetType } from '@/components/ViewTweets/types';
import { getUserTweets } from '@/services/firestore/getUserTweets';
import { UserState } from '@/types/user';

import { SectionTab } from '../styles';

import { HeaderProfile } from './Header';

export const Profile = () => {
  const user = useSelector((state: UserState) => state.user.data);
  const [tweetsUser, setTweetsUser] = useState<TweetType[] | TweetType>([]);

  useEffect(() => {
    const getTweets = async () => {
      const tweets = await getUserTweets(user?.tweets ?? []);
      const tweetsSort = tweets.sort(
        (a, b) => b!.date_created!.seconds - a!.date_created!.seconds,
      ) as TweetType[];
      setTweetsUser(tweetsSort);
    };
    getTweets();
  }, [user?.tweets?.length, user?.name, user?.photoURL]);

  if (!user) {
    return <Loader />;
  }

  return (
    <div>
      <HeaderProfile />
      <TweetForm />
      <SectionTab>
        <Title row="xs"> Tweets </Title>
      </SectionTab>
      {tweetsUser && <ViewTweets data={tweetsUser as TweetType[]} />}
    </div>
  );
};
