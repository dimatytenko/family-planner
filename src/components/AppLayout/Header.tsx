import React from 'react';

import {HeaderComponentWrapper, Container, Logo, HeaderContainer} from './styles';
import {Navigation} from '../Navigation';
import {HomeLink} from '../../ui-kit/Button';
import {HeaderComponentPropsT} from './types';

export const HeaderComponent: React.FC<HeaderComponentPropsT> = ({user, onLogOut, visibleLogin, visibleSignup}) => {
  return (
    <HeaderComponentWrapper>
      <Container>
        <HeaderContainer>
          <HomeLink>
            <Logo>Logo</Logo>
          </HomeLink>

          <Navigation user={user} onLogOut={onLogOut} visibleLogin={visibleLogin} visibleSignup={visibleSignup} />
        </HeaderContainer>
      </Container>
    </HeaderComponentWrapper>
  );
};
