import {FC} from 'react';
import {Skeleton} from 'antd';
import {useTranslation} from 'react-i18next';

import {Title} from '../../styles/common';
import {IUsersListProps} from '../../types/user';
import {User} from './User';
import {UserList} from './styles';

export const UsersList: FC<IUsersListProps> = ({users, loading}) => {
  const {t} = useTranslation();

  if (loading) return <Skeleton active />;

  if (!users.length) return null;

  return (
    <>
      <Title>{t('common:titles.userList')}</Title>
      <UserList>
        {users.map((user) => (
          <User key={user.username} user={user} />
        ))}
      </UserList>
    </>
  );
};
