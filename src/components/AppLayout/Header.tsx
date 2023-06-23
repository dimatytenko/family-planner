import React, {useState, useEffect} from 'react';

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window?.pageYOffset > 30 ? setScrolled(true) : setScrolled(false);
    };
    window?.addEventListener('scroll', handleScroll);
    return () => window?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderComponentWrapper $scrolled={scrolled}>
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
