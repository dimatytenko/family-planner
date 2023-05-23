import React from 'react';
import {List} from 'antd';

import {UserInfolist, DrawerItemField, DrawerItemLabel} from './styles';
import {IUserInfoProps} from '../../types/user';
import {Button} from '../../ui-kit/Button';

export const UserInfo: React.FC<IUserInfoProps> = ({userInfo, onChangeMode, goToChangePassword}) => {
  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={userInfo}
        renderItem={(item) =>
          item.field && (
            <List.Item>
              <List.Item.Meta
                title={<DrawerItemLabel>{item.label}</DrawerItemLabel>}
                description={<DrawerItemField>{item.field}</DrawerItemField>}
              />
            </List.Item>
          )
        }
      />
      <UserInfolist>
        <Button onClick={onChangeMode}>Edit profile</Button>
        <Button onClick={goToChangePassword}>Change password</Button>
      </UserInfolist>
    </>
  );
};
