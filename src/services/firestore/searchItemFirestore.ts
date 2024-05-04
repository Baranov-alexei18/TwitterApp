import {
  collection, CollectionReference,
  DocumentData, getDocs, query, where,
} from 'firebase/firestore';

import { FIRESTORE_COLLECTION } from '@/constants/firestore';
import { firestore } from '@/firebase/firebaseConfig';
import { uniqueDoc } from '@/utils/uniqueDoc';

export const getSnapshotQuery = async (
  ref: CollectionReference<DocumentData, DocumentData>,
  value: string,
  queryString: string,
) => {
  try {
    const snapshot = query(ref, where(value, '>=', queryString), where(value, '<=', `${queryString}\uf8ff`));
    const snapshotResults = (await getDocs(snapshot)).docs.map((docItem) => docItem.data());

    return snapshotResults;
  } catch (error) {
    console.error(error);
  }
};

export const searchItemFirestore = async (queryString: string) => {
  try {
    const tweetsRef = collection(firestore, FIRESTORE_COLLECTION.TWEETS);

    const tweetResults = await getSnapshotQuery(tweetsRef, 'text', queryString);

    const usersRef = collection(firestore, FIRESTORE_COLLECTION.USERS);

    const userResults = await getSnapshotQuery(usersRef, 'name', queryString);
    const emailResults = await getSnapshotQuery(usersRef, 'email', queryString);

    const resultEmailAndName = uniqueDoc('uid', ...userResults!, ...emailResults!);

    return { tweets: tweetResults, users: [...resultEmailAndName] };
  } catch (error) {
    console.error('Error fetching search results:', error);
    return { tweets: [], users: [] };
  }
};
