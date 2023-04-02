import React from 'react';

import {HeaderComponentWrapper, Container, HeaderContainer} from './styles';
import {Navigation} from '../Navigation';
import {HomeLink} from '../../ui-kit/Button';
import {HeaderComponentPropsT} from '../../types/layout';
import {Logo} from '../../ui-kit/Logo';

export const HeaderComponent: React.FC<HeaderComponentPropsT> = ({
  user,
  visibleLogin,
  visibleSignup,
  drawerActions,
}) => {
  return (
    <HeaderComponentWrapper>
      <Container>
        <HeaderContainer>
          <HomeLink>
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
