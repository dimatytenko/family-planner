import {getQuery, postQuery} from './hooks';
import {userQueryList} from '../constants/api';
import {UpdateAvatarReqBody, UpdateUserReqBody, ResetPasswordReqBody} from './types/user';

export const userQuery = async () => await getQuery(userQueryList.user());
export const updateAvatarQuery = async (body: UpdateAvatarReqBody) =>
  await postQuery(userQueryList.updateAvatar()).send(body);
export const updateUserQuery = async (body: UpdateUserReqBody) =>
  await postQuery(userQueryList.updateUser()).send(body);
export const resetPasswordQuery = async (body: ResetPasswordReqBody) =>
  await postQuery(userQueryList.resetPassword()).send(body);
