import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DefaultUserIcon from '@/assets/image/defaultUserImage.png';
import { setTweetToFirestore } from '@/services/firestore/setTweetToFirestore';
import { setUser } from '@/store/sliceUser';
import { UserState } from '@/types/user';

import { Tweet } from '../Tweet';
import { TextArea } from '../ui-components/TextArea';
import { FileType } from '../ui-components/TextArea/types';

import { TweetType } from './types';

export const ViewTweets = (dataArr: {data: TweetType[]}) => {
  console.log('dataArr');
  console.log(dataArr);

  return dataArr.data.map((item: TweetType) => (
    <Tweet
      key={item.tweet_id}
      data={item}
    />
  ));
};
