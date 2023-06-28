import React from 'react';
import {List} from 'antd';
import {useTranslation} from 'react-i18next';

import {UserInfolist, DrawerItemField, DrawerItemLabel} from './styles';
import {IUserInfoProps} from '../../types/user';
import {Button} from '../../ui-kit/Button';

export const UserInfo: React.FC<IUserInfoProps> = ({userInfo, onChangeMode, goToChangePassword}) => {
  const {t} = useTranslation();

  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={userInfo}
        renderItem={(item) =>
          item.field && (
            <List.Item>
              <List.Item.Meta
                title={<DrawerItemLabel>{t(`account:fields.${item.label}`)}</DrawerItemLabel>}
                description={<DrawerItemField>{item.field}</DrawerItemField>}
              />
            </List.Item>
          )
        }
      />
      <UserInfolist>
        <Button onClick={onChangeMode}>{t('account:buttons.editProfile')}</Button>
        <Button onClick={goToChangePassword}>{t('account:buttons.changePassword')}</Button>
      </UserInfolist>
    </>
  );
};
