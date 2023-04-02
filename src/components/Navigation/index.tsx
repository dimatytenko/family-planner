import React from 'react';
import {Button} from 'antd';

import {LinkButton} from '../../ui-kit/Button';
import {route} from '../../constants/routes';
import {NavigationWrapper} from './styles';
import {NavigationPropsT} from '../../types/layout';
import {MenuFoldOutlined} from '@ant-design/icons';

export const Navigation: React.FC<NavigationPropsT> = ({user, visibleLogin, visibleSignup, drawerActions}) => {
  return (
    <NavigationWrapper>
      {!user ? (
        <>
          {visibleLogin && <LinkButton to={route.login.path}>Log in</LinkButton>}
          {visibleSignup && <LinkButton to={route.signup.path}>Sign up</LinkButton>}
        </>
      ) : (
        <>
          <Button type="primary" onClick={drawerActions.showDrawer}>
            <MenuFoldOutlined />
          </Button>
        </>
      )}
    </NavigationWrapper>
  );
};
