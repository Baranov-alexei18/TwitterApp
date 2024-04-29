import { DocumentData } from 'firebase/firestore';

export type TweetFromFirestoreType = {
    user: DocumentData;
}| null | undefined
