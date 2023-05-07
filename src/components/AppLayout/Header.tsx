import React from 'react';

import {HeaderComponentWrapper, Container, HeaderContainer} from './styles';
import {Navigation} from '../Navigation';
import {HomeLink} from '../../ui-kit/Button';
import {IHeaderComponentProps} from '../../types/layout';
import {Logo} from '../../ui-kit/Logo';

export const HeaderComponent: React.FC<IHeaderComponentProps> = ({
  user,
  visibleLogin,
  visibleSignup,
  drawerActions,
}) => {
  return (
    <HeaderComponentWrapper>
      <Container>
        <HeaderContainer>
          <HomeLink aria-label="Go home">
            <Logo />
          </HomeLink>

          <Navigation
            user={user}
            visibleLogin={visibleLogin}
            visibleSignup={visibleSignup}
            drawerActions={drawerActions}
          />
        </HeaderContainer>
      </Container>
    </HeaderComponentWrapper>
  );
};
