export type UserTypes = {
  uid: string,
  email?: string,
  password?: string,
  name?: string,
  displayName?: string,
  phone?: string | null,
  date_birthday?: Date | null,
  date_created?: Date,
  photoURL?: string | null,
  tweets?: unknown[],
};

export type UserState = {
  user: {
    data:UserTypes
  };
};
