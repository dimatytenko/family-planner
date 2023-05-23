import Cookies from 'js-cookie';
import {useState, useEffect} from 'react';
import {useSetRecoilState} from 'recoil';
import {useNavigate} from 'react-router-dom';

import {session, session as sessionState} from '../states/session';
import {signupQuery, loginQuery, logoutQuery, reverifyQuery, forgotPasswordQuery} from '../queries/auth';
import {userQuery} from '../queries/user';
import {signupReqBody, loginReqBody, reverifyReqBody} from '../queries/types/auth';
import {IUser} from '../types/user';
import {loading, errorMessage} from '../helpers/common';
import {route} from '../constants/routes';

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

export const useSetLogin = () => {
  const setSession = useSetRecoilState(session);
  const navigate = useNavigate();

  const setUser = (res: {token: string; user: IUser}) => {
    const token = res?.token;
    setToken(token);
    setSession({sessionToken: token, user: res?.user});

    navigate(route.main.path);
  };
  return {setUser};
};

export const useLogin = () => {
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(loading);
  const [error, setError] = useState<string | undefined>('');
  const {setUser} = useSetLogin();

  const resetError = () => setError('');

  const onLogin = async (values: loginReqBody) => {
    try {
      setError('');
      setIsLoading((prev) => ({...prev, send: true}));
      setSuccess(false);

      const body = {password: values?.password.trim() || '', username: values?.username.trim() || ''};
      const res = await loginQuery(body);
      if (res?.status) {
        setUser(res?.body);
        setSuccess(true);
      }
    } catch (e) {
      console.log(e);
      const message = errorMessage(e);
      setError(message);
    } finally {
      setIsLoading((prev) => ({...prev, send: false}));
    }
  };

  return {onSubmit: onLogin, isLoading, success, error, resetError};
};

export function useFetchSession() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
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
        setSuccess(true);
        setLoading(false);
      } else {
        setToken(null);
        setSession(null);
        setLoading(false);
      }
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
    if (res.body.user) return res.body.user as IUser;
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

export const useReverify = () => {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(loading);
  const [error, setError] = useState<string | undefined>('');

  const resetError = () => setError('');

  const onReverify = async (values: reverifyReqBody) => {
    try {
      setError('');
      setIsLoading((prev) => ({...prev, send: true}));
      setMessage('');

      const body = {email: values?.email.trim() || ''};
      const res = await reverifyQuery(body);
      if (res?.status) {
        setMessage(res.body.message);
      }
    } catch (e) {
      console.log(e);
      const message = errorMessage(e);
      setError(message);
    } finally {
      setIsLoading((prev) => ({...prev, send: false}));
    }
  };

  const onForgetPassword = async (values: reverifyReqBody) => {
    try {
      setError('');
      setIsLoading((prev) => ({...prev, send: true}));
      setMessage('');

      const body = {email: values?.email.trim() || ''};
      const res = await forgotPasswordQuery(body);
      if (res?.status) {
        setMessage(res.body.message);
      }
    } catch (e) {
      console.log(e);
      const message = errorMessage(e);
      setError(message);
    } finally {
      setIsLoading((prev) => ({...prev, send: false}));
    }
  };

  return {onReverify, onForgetPassword, isLoading, error, resetError, message};
};
