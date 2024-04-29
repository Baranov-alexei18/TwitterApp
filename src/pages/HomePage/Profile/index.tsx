import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { TweetForm } from '@/components/TweetForm';
import { Loader } from '@/components/ui-components/Loader';
import { ViewTweets } from '@/components/ViewTweets';
import { getUserTweets } from '@/services/firestore/getUserTweets';
import { UserState } from '@/types/user';

import { HeaderProfile } from './Header';

export const Profile = () => {
  const user = useSelector((state: UserState) => state.user.data);
  const [tweetsUser, setTweetsUser] = useState([]);

  useEffect(() => {
    const getTweets = async () => {
      const tweets = await getUserTweets(user.tweets!);
      const tweetsSort = tweets.sort((a, b) => b.date_created - a.date_created);
      setTweetsUser(tweetsSort);
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
      {tweetsUser.length !== 0 && <ViewTweets data={tweetsUser} />}
      <p>This is the Profile page content.</p>
    </div>
  );
};
