import React from 'react';

import {Account} from '../../components/Account';
import {useUser, useAvatar} from '../../hooks/user';

export const AccountContainer = () => {
  const {userInfo, userData} = useUser();
  const {avatarData} = useAvatar();

  return <Account userInfo={userInfo} userData={userData} avatarData={avatarData} />;
};
