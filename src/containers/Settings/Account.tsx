import React from 'react';

import {UserInfo} from '../../components/UserInfo';
import {useUser} from '../../hooks/user';

export const Account = () => {
  const {userInfo, userData} = useUser();
  return <UserInfo userInfo={userInfo} userData={userData} />;
};
