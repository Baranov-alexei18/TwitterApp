import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DefaultUserIcon from '@/assets/image/defaultUserImage.png';
import { setTweetToFirestore } from '@/services/firestore/setTweetToFirestore';
import { modalClose } from '@/store/sliceModal';
import { setUser } from '@/store/sliceUser';
import { SPACING } from '@/theme/variables';
import { UserState } from '@/types/user';

import { Icon } from '../../ui-components/Icon';
import { StyledIconCircle40 } from '../../ui-components/Icon/config';
import { TextArea } from '../../ui-components/TextArea';

import { Container } from './styles';

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
      <Icon
        src={user.photoURL || DefaultUserIcon}
        alt="User Icon"
        {...StyledIconCircle40}
        margin={`${SPACING.sm} ${SPACING.zero} ${SPACING.zero} ${SPACING.xs}`}
      />
      <TextArea
        onSubmit={handleTweetSubmit}
        placeholder="What's happening?"
        loader={loading}
      />
    </Container>
  );
};
