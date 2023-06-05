import {getQuery, postQuery, putQuery, patchQuery} from './hooks';
import {userQueryList} from '../constants/api';
import {UpdateAvatarReqBody, UpdateUserReqBody, ResetPasswordReqBody} from './types/user';

export const userQuery = async () => await getQuery(userQueryList.user());

export const updateAvatarQuery = async (body: UpdateAvatarReqBody) =>
  await patchQuery(userQueryList.updateAvatar()).send(body);

export const updateUserQuery = async (body: UpdateUserReqBody) => await putQuery(userQueryList.updateUser()).send(body);

export const resetPasswordQuery = async (body: ResetPasswordReqBody) =>
  await postQuery(userQueryList.resetPassword()).send(body);

export const getUsersQuery = async () => await getQuery(userQueryList.users());
