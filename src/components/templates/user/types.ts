type TUserData = {
  address: string;
  profileId: string;
  bio: string;
  balance?: number;
};

export interface IUserData {
  user?: TUserData[];
}
