import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useLocation} from 'react-router-dom';

import {WithChildren} from '../../types/helpers';
import {Main, Container} from './styles';

export const StyledLayout = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

type AppLayoutProps = WithChildren & {
  hideHeader?: boolean;
  hideFooter?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
};

export const AppLayout: React.FC<AppLayoutProps> = ({children, header, footer, hideHeader, hideFooter, ...props}) => {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <StyledLayout {...props}>
      {!hideHeader && header}
      <Main>
        <Container>{children}</Container>
      </Main>
      {!hideFooter && footer}
    </StyledLayout>
  );
};
