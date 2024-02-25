import {FC} from 'react';
import {List} from 'antd';
import {useTranslation} from 'react-i18next';

import {UserInfolist, DrawerItemField, DrawerItemLabel, TelegramLink} from './styles';
import {IUserInfoProps, USER} from '../../types/user';
import {Button} from '../../ui-kit/Button';
import {TELEGRAM_BOT_URL} from '../../constants/env';

export const UserInfo: FC<IUserInfoProps> = ({userInfo, onChangeMode, goToChangePassword}) => {
  const {t} = useTranslation();

  const isTelegram = userInfo?.find((item) => item.label === USER.telegram)?.field !== '';

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
                description={
                  <DrawerItemField>
                    {item.label !== USER.sex ? item.field : t(`account:fields.${item.field}`)}
                  </DrawerItemField>
                }
              />
            </List.Item>
          )
        }
      />
      {isTelegram && (
        <TelegramLink href={TELEGRAM_BOT_URL} target="_blank" rel="noreferrer noopener">
          {t(`account:fields.telegramPlaceholder`)}
        </TelegramLink>
      )}
      <UserInfolist>
        <Button onClick={onChangeMode}>{t('account:buttons.editProfile')}</Button>
        <Button onClick={goToChangePassword}>{t('account:buttons.changePassword')}</Button>
      </UserInfolist>
    </>
  );
};
