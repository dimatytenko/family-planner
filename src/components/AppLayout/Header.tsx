import React from 'react';

import {HeaderComponentWrapper, Container, Logo, HeaderContainer} from './styles';
import {Navigation} from '../Navigation';
import {HomeLink} from '../../ui-kit/Button';

export const HeaderComponent = () => {
  return (
    <HeaderComponentWrapper>
      <Container>
        <HeaderContainer>
          <HomeLink>
            <Logo>Logo</Logo>
          </HomeLink>

          <Navigation />
        </HeaderContainer>
      </Container>
    </HeaderComponentWrapper>
  );
};
