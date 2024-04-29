import { doc, getDoc } from 'firebase/firestore';

import { firestore } from '@/firebase/firebaseConfig';

const getUserDataFromFirestore = async (token: string) => {
  try {
    const userDocRef = doc(firestore, 'users', token);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      return userDocSnap.data();
    }
    throw new Error('Данные пользователя не найдены в Firestore');
  } catch (error) {
    throw new Error(`Ошибка при получении данных пользователя из Firestore: ${error}`);
  }
};

export { getUserDataFromFirestore };