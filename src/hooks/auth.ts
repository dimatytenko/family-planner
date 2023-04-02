import Cookies from 'js-cookie';
import {useState, useEffect} from 'react';
import {useRecoilState, useSetRecoilState} from 'recoil';

import {session, session as sessionState, userState} from '../states/session';
import {signupQuery, loginQuery, userQuery, logoutQuery} from '../queries/auth';
import {signupReqBody, loginReqBody} from '../queries/types/auth';
import {User} from '../types/auth';
import {loading, errorMessage} from '../helpers/common';

type TokenType = string | null | undefined;

export const getToken = (): TokenType => {
  return Cookies.get('id_token');
};

export const setToken = (token: TokenType, expires?: number): TokenType | void => {
  if (!token) {
    return Cookies.remove('id_token');
  }
  return Cookies.set('id_token', token, {expires: expires || 365});
};

export const useSignup = (redirect?: () => void) => {
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(loading);
  const [error, setError] = useState<string | undefined>('');

  const onSignup = async (values: signupReqBody) => {
    try {
      setError('');
      setSuccess(false);
      setIsLoading((prev) => ({...prev, send: true}));

      const body = {
        email: values?.email.trim() || '',
        password: values?.password.trim() || '',
        username: values?.username.trim() || '',
      };
      const res = await signupQuery(body);
      if (res.status) {
        setSuccess(true);
        setIsLoading((prev) => ({...prev, send: false}));
        redirect?.();
      }
    } catch (e) {
      console.log(e);
      const message = errorMessage(e);
      setError(message);
      setIsLoading((prev) => ({...prev, send: false}));
    }
  };
  return {onSubmit: onSignup, isLoading, success, error};
};

export const useLogin = (redirect?: () => void) => {
  const setSession = useSetRecoilState(session);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(loading);
  const [error, setError] = useState<string | undefined>('');

  const resetError = () => setError('');

  const onLogin = async (values: loginReqBody) => {
    try {
      setError('');
      setIsLoading((prev) => ({...prev, send: true}));
      setSuccess(false);

      const body = {password: values?.password.trim() || '', username: values?.username.trim() || ''};
      const res = await loginQuery(body);
      console.log('res?.body?.user', res?.body?.user);
      if (res?.status) {
        const token = res?.body?.token;
        setToken(token);
        setSession({sessionToken: token, user: res?.body?.user});
        setSuccess(true);

        setIsLoading((prev) => ({...prev, send: false}));
        redirect?.();
      }
    } catch (e) {
      console.log(e);
      const message = errorMessage(e);
      setError(message);
      setIsLoading((prev) => ({...prev, send: false}));
    }
  };

  return {onSubmit: onLogin, isLoading, success, error, resetError};
};

export const useViewer = () => {
  const user = useRecoilState(userState);
  console.log('user', user);
  return user[0];
};

export const useUpdateViewer = () => {
  const setUser = useSetRecoilState(userState);
  return (user: User) => {
    setUser(user);
  };
};

export function useFetchSession() {
  const [loading, setLoading] = useState(false);
  const [success, SetSuccess] = useState(false);
  const checkAuth = useCheckAuthorize();
  const setSession = useSetRecoilState(sessionState);
  const [mounted, setMounted] = useState(false);
  const token = getToken();

  useEffect(() => {
    if (mounted) return;
    setMounted(true);
    const setAuthorize = async () => {
      setLoading(true);
      if (!token) return setLoading(false);

      const res = await checkAuth();
      if (res) {
        setSession({sessionToken: token, user: res});
        SetSuccess(true);
        setLoading(false);
      } else {
        setToken(null);
        setSession(null);
        return {loading: false, success};
      }

      setLoading(false);
    };
    setAuthorize();
  }, []);

  if (!mounted) return {loading: true, success};
  if (!token) {
    setToken(null);
    setSession(null);
    return {loading: false, success};
  }
  return {loading, success};
}

export const useCheckAuthorize = () => async () => {
  try {
    const res = await userQuery(); //check auth query
    if (res.body.user) return res.body.user as User;
    return false;
  } catch (e) {
    return false;
  }
};

export const useLogOut = () => {
  const setSession = useSetRecoilState(session);

  return async () => {
    const res = await logoutQuery();
    if (res?.ok) {
      setToken(null);
      setSession(null);
    }
  };
};
