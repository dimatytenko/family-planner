import {FC, useState} from 'react';

import {TUserInfoProps} from '../../types/user';
import {UserForm} from './UserForm';
import {UserInfoWrapper} from './styles';
import {AccountAvatar} from './Avatar';
import {UserInfo} from './UserInfo';

export const Account: FC<TUserInfoProps> = ({userInfo, userData, avatarData, goToChangePassword}) => {
  const [editMode, setEditMode] = useState(false);

  const onChangeMode = () => {
    setEditMode(!editMode);
  };
  return (
    <>
      <AccountAvatar avatarData={avatarData} />
      {!editMode ? (
        <UserInfo userInfo={userInfo} onChangeMode={onChangeMode} goToChangePassword={goToChangePassword} />
      ) : (
        <UserInfoWrapper>
          <UserForm userData={userData} onChangeMode={onChangeMode} userInfo={userInfo} />
        </UserInfoWrapper>
      )}
    </>
  );
};
