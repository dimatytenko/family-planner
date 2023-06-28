import React from 'react';
import {useTranslation} from 'react-i18next';

import {LinkButton} from '../../ui-kit/Button';
import {route} from '../../constants/routes';
import {NavigationWrapper} from './styles';
import {INavigationProps} from '../../types/layout';
import {MenuFoldOutlined} from '@ant-design/icons';
import {Button} from '../../ui-kit/Button';
import {ChangeLanguageContainer} from '../../containers/Layout/Header/ChangeLanguageContainer';

export const Navigation: React.FC<INavigationProps> = ({user, visibleLogin, visibleSignup, drawerActions}) => {
  const {t} = useTranslation();

  return (
    <NavigationWrapper>
      <ChangeLanguageContainer />
      {!user ? (
        <>
          {visibleLogin && <LinkButton to={route.login.path}>{t('auth:buttons.login')}</LinkButton>}
          {visibleSignup && <LinkButton to={route.signup.path}>{t('auth:buttons.signUp')}</LinkButton>}
        </>
      ) : (
        <>
          <Button variant="tertiary" onClick={drawerActions.showDrawer}>
            <MenuFoldOutlined />
          </Button>
        </>
      )}
    </NavigationWrapper>
  );
};
