import Cookies from 'js-cookie';
import {useState, useEffect} from 'react';
import {useRecoilState, useSetRecoilState} from 'recoil';
import {session, session as sessionState, userState} from '../states/session';
import {signupQuery, loginQuery, userQuery, logoutQuery} from '../queries/auth';
import {signupReqBody, loginReqBody} from '../queries/types/auth';
import {User} from '../types/auth';

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>('');

  const onSignup = async (values: signupReqBody) => {
    try {
      setError('');
      setSuccess(false);
      setLoading(true);

      const body = {
        email: values?.email.trim() || '',
        password: values?.password.trim() || '',
        username: values?.username.trim() || '',
      };
      const res = await signupQuery(body);
      if (res.status) {
        setSuccess(true);
        setLoading(false);
        redirect?.();
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      setError('register error');
    }
  };
  return {onSignup, loading, success, error};
};

export const useLogin = (redirect?: () => void) => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>('');
  const setSession = useSetRecoilState(session);

  const onLogin = async (values: loginReqBody) => {
    try {
      setError('');
      setLoading(true);
      setSuccess(false);

      const body = {password: values?.password.trim() || '', username: values?.username.trim() || ''};
      const res = await loginQuery(body);
      if (res?.status) {
        const token = res?.body?.token;
        console.log('res.body', res.body);
        setToken(token);
        setSession({sessionToken: token, user: res?.body?.user});
        setSuccess(true);

        setLoading(false);
        redirect?.();
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      setError('Login error');
    }
  };
  return {onLogin, loading, success, error};
};

export const useViewer = () => {
  const user = useRecoilState(userState);
  return user[0];
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
        console.log(res);
        console.log('res', res);
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
    if (res.body) return res.body as User;
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
