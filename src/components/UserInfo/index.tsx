import React, {useState} from 'react';
import {List, Button} from 'antd';

import {TUserInfoProps} from '../../types/user';
import {UserForm} from './UserForm';
import {UserInfoWrapper, UserInfolist} from './styles';

export const UserInfo: React.FC<TUserInfoProps> = ({userInfo, userData}) => {
  const [editMode, setEditMode] = useState(false);

  const onChangeMode = () => {
    setEditMode(!editMode);
  };
  typeof UserForm;
  return (
    <UserInfoWrapper>
      {!editMode ? (
        <>
          <List
            itemLayout="horizontal"
            dataSource={userInfo}
            renderItem={(item) =>
              item.field && (
                <List.Item>
                  <List.Item.Meta title={item.label} description={item.field} />
                </List.Item>
              )
            }
          />
          <UserInfolist>
            <Button onClick={onChangeMode}>Edit profile</Button>
          </UserInfolist>
        </>
      ) : (
        <UserForm userData={userData} onChangeMode={onChangeMode} userInfo={userInfo} />
      )}
    </UserInfoWrapper>
  );
};
