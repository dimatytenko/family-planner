export type UpdateAvatarReqBody = {file: {thumbUrl?: string | null}};

export type UpdateUserReqBody = {
  name?: string;
  lastName?: string;
  email: string;
  username: string;
  age?: number;
  sex?: string;
};

export type ResetPasswordReqBody = {
  oldPassword: string;
  newPassword: string;
};
