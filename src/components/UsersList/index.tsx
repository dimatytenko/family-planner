import React from 'react';
import {Skeleton} from 'antd';

import {Title} from '../../styles/common';
import {IUsersListProps} from '../../types/user';
import {User} from './User';
import {UserList} from './styles';

export const UsersList: React.FC<IUsersListProps> = ({users, loading}) => {
  if (loading) return <Skeleton active />;

  return (
    <>
      <Title>Users</Title>
      <UserList>
        {users.map((user) => (
          <User key={user.username} user={user} />
        ))}
      </UserList>
    </>
  );
};
