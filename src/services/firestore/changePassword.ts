import {
  EmailAuthProvider,
  reauthenticateWithCredential, updatePassword, UserCredential,
} from 'firebase/auth';

import { auth } from '@/firebase/firebaseConfig';

const reauthenticateUser = async (email: string, oldPassword: string): Promise<UserCredential> => {
  const credentials = EmailAuthProvider.credential(email, oldPassword);
  return reauthenticateWithCredential(auth.currentUser!, credentials);
};

const changeUserPassword = async (newPassword: string): Promise<void> => {
  await updatePassword(auth.currentUser!, newPassword);
};

export const changePassword = async (email: string, oldPassword: string, newPassword: string) => {
  try {
    await reauthenticateUser(email, oldPassword);
    await changeUserPassword(newPassword);
  } catch (error) {
    console.error('Ошибка при изменении пароля:', error);
    throw error;
  }
};
