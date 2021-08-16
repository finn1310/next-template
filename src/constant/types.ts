export interface IUser {
  userId: string;
  fullName: string;
  displayName?: string;
  email: string;
}

export interface IAccount extends IUser {
  password: string;
}
