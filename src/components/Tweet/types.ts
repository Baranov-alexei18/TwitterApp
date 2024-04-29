import { TweetType } from '../ViewTweets/types';

export type TweetProps = {
    data: TweetType,
    onHandleTweet: (tweet: TweetType) => void,
};
