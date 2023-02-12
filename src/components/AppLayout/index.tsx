import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useLocation} from 'react-router-dom';

import {MainWrapper} from './styles';
import {WithChildren} from '../../types/helpers';

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
      {/* <Background> */}
      <MainWrapper>{children}</MainWrapper>
      {/* </Background> */}
      {!hideFooter && footer}
    </StyledLayout>
  );
};
