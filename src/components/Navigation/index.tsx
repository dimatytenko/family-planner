import React from 'react';
import {Button} from 'antd';

import {LinkButton} from '../../ui-kit/Button';
import {route} from '../../constants/routes';
import {NavigationWrapper} from './styles';
import {NavigationPropsT} from './types';

export const Navigation: React.FC<NavigationPropsT> = ({user, onLogOut, visibleLogin, visibleSignup}) => {
  return (
    <NavigationWrapper>
      {!user ? (
        <>
          {visibleLogin && <LinkButton to={route.login.path}>Log in</LinkButton>}
          {visibleSignup && <LinkButton to={route.signup.path}>Sign up</LinkButton>}
        </>
      ) : (
        <>
          <Button>{user.username}</Button>
          <Button onClick={onLogOut}>Log out</Button>
        </>
      )}
    </NavigationWrapper>
  );
};
