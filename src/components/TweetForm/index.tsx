import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DefaultUserIcon from '@/assets/image/defaultUserImage.png';
import { setTweetToFirestore } from '@/services/firestore/setTweetToFirestore';
import { modalClose } from '@/store/sliceModal';
import { setUser } from '@/store/sliceUser';
import { UserState } from '@/types/user';

import { TextArea } from '../ui-components/TextArea';

import { Container, UserIcon } from './styles';

export const TweetForm = () => {
  const user = useSelector((state: UserState) => state.user.data);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleTweetSubmit = async (dateTweet: { text: string; photo?: File }) => {
    setLoading(true);
    try {
      const tweet = await setTweetToFirestore({ ...dateTweet, tweets: user.tweets, id: user.uid });
      setLoading(false);
      dispatch(setUser({ ...user, tweets: [...user.tweets!, tweet] }));
      dispatch(modalClose());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <UserIcon src={user.photoURL || DefaultUserIcon} alt="User Icon" />
      <TextArea
        onSubmit={handleTweetSubmit}
        placeholder="What's happening?"
        loader={loading}
      />
    </Container>
  );
};
