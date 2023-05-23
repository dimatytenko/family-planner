import {AuthQueryList} from '../constants/api';
import {postQuery} from './hooks';
import {signupReqBody, loginReqBody, reverifyReqBody} from './types/auth';

export const signupQuery = async (body: signupReqBody) => await postQuery(AuthQueryList.signup).send(body);
export const loginQuery = async (body: loginReqBody) => await postQuery(AuthQueryList.login).send(body);
export const reverifyQuery = async (body: reverifyReqBody) => await postQuery(AuthQueryList.reverify).send(body);
export const forgotPasswordQuery = async (body: reverifyReqBody) =>
  await postQuery(AuthQueryList.forgotPassword).send(body);

export const logoutQuery = async () => await postQuery(AuthQueryList.logout);
