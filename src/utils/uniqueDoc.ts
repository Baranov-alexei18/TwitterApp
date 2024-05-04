import { DocumentData } from 'firebase/firestore';

export const uniqueDoc = (
  property: string,
  ...args: DocumentData[]
) => {
  const uniqueMap = new Map();
  if (!args?.length) {
    return [];
  }

  args.forEach((obj) => {
    const keyValue = obj[property];
    if (keyValue !== undefined) {
      uniqueMap.set(keyValue, obj);
    }
  });
  return Array.from(uniqueMap.values());
};
