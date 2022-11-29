type TUserData = {
  address: string;
  signature: string;
  profileId: string;
  expirationTime: string;
  bio: string;
  balance: number;
};

export interface IUserData {
  user: TUserData[];
}
