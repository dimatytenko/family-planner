import {useState} from 'react';
import {useRecoilState, useSetRecoilState} from 'recoil';

import {getUserInfo} from '../helpers/user';
import {info, loading, errorMessage} from '../helpers/common';
import {updateUserQuery} from '../queries/user';
import {IUserValues} from '../types/user';
import {userState} from '../states/session';
import {IUser} from '../types/user';

export const useViewer = () => {
  const user = useRecoilState(userState);
  return user[0];
};

export const useUpdateViewer = () => {
  const setUser = useSetRecoilState(userState);
  return (user: IUser) => {
    setUser(user);
  };
};

export const useUser = () => {
  const [user, updateUser] = useRecoilState(userState);
  const [isLoading, setIsLoading] = useState(loading);
  const [error, setError] = useState('');

  const resetError = () => setError('');

  const userInfo = getUserInfo(user);

  const onSubmit = async (values: IUserValues, onSuccess?: () => void) => {
    try {
      setIsLoading((prev) => ({...prev, send: true}));

      const res = await updateUserQuery({...values});
      console.log('res', res);
      if (res) {
        updateUser(res.body.user);
        info('Success');
        setIsLoading((prev) => ({...prev, send: false}));
        onSuccess?.();
        return;
      }
    } catch (e) {
      console.log(e);
      const message = errorMessage(e);
      message ? setError(message) : setError('Something went wrong. Please try again.');
      return;
    } finally {
      setIsLoading((prev) => ({...prev, send: false}));
    }
  };

  return {user, userInfo, userData: {onSubmit, resetError, error, isLoading}};
};
