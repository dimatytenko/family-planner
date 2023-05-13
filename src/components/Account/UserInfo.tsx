import React from 'react';
import {List, Button} from 'antd';

import {UserInfolist} from './styles';
import {IUserInfoProps} from '../../types/user';

export const UserInfo: React.FC<IUserInfoProps> = ({userInfo, onChangeMode}) => {
  return (
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
  );
};
