import {AuthQueryList} from '../constants/api';
import {postQuery} from './hooks';
import {signupReqBody, loginReqBody} from './types/auth';

export const signupQuery = async (body: signupReqBody) => await postQuery(AuthQueryList.signup).send(body);
export const loginQuery = async (body: loginReqBody) => await postQuery(AuthQueryList.login).send(body);

export const logoutQuery = async () => await postQuery(AuthQueryList.logout);
