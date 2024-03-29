import React from 'react';

import {UsersList} from '../../components/UsersList';
import {useUsers} from '../../hooks/user';

export const UsersListContainer = () => {
  const {users, loading} = useUsers();
  return <UsersList users={users} loading={loading} />;
};
