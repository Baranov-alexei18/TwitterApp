import { Timestamp } from 'firebase/firestore';

export type UserTypes = {
  uid: string,
  email?: string,
  password?: string,
  name?: string,
  displayName?: string,
  phone?: string | null,
  date_birthday?: Timestamp | null,
  date_created?: Timestamp,
  description: string,
  photoURL?: string | null,
  tweets?: string[],
};

export type UserState = {
  user: {
    data:UserTypes
  };
};
