import { Timestamp } from 'firebase/firestore';

export const formatTimestampToDate = (timestamp: { seconds: number, nanoseconds: number }) => {
  if (timestamp && typeof timestamp === 'object' && timestamp.seconds && timestamp.nanoseconds) {
    return new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
  }
  return null;
};

export const convertToTimestamp = (year:number, month:number, day:number) => {
  const date = new Date(year, month - 1, day);

  const timestamp = Timestamp.fromDate(date);

  return timestamp;
};

export const formatDate = (date: Date) => {
  const months = [
    'Jun', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};
