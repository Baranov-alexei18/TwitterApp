import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DefaultUserIcon from '@/assets/image/defaultUserImage.png';
import { setTweetToFirestore } from '@/services/firestore/setTweetToFirestore';
import { setUser } from '@/store/sliceUser';
import { UserState } from '@/types/user';

import { TextArea } from '../ui-components/TextArea';
import { FileType } from '../ui-components/TextArea/types';

import { Container, UserIcon } from './styles';

export const TweetForm = () => {
  const user = useSelector((state: UserState) => state.user.data);

  const dispatch = useDispatch();

  const handleTweetSubmit = async (dateTweet: { text: string; photo?: File }) => {
    try {
      const tweet = await setTweetToFirestore({ ...dateTweet, tweets: user.tweets, id: user.uid });
      dispatch(setUser({ ...user, tweets: [...user.tweets!, tweet] }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <UserIcon src={user.photoURL || DefaultUserIcon} alt="User Icon" />
      <TextArea
        onSubmit={handleTweetSubmit}
        placeholder="What's happening?"
      />
    </Container>
  );
};
