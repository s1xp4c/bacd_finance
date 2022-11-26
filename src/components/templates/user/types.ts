type TUserData = {
  address: string;
  signature: string;
  profileId: string;
  expirationTime: string;
  bio: string;
};
export interface IUserdata {
  user?: TUserData[];
}
