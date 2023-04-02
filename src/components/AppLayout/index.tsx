import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import {StyledLayout, Main, Container} from './styles';
import {DrawerComponent} from './Drawer';
import {AppLayoutProps} from '../../types/layout';

export const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  header,
  footer,
  hideHeader,
  hideFooter,
  drawerActions,
  user,
  onLogOut,
  ...props
}) => {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <StyledLayout {...props}>
      {!hideHeader && header}
      <Main>
        <Container>{children}</Container>
        <DrawerComponent
          open={drawerActions.open}
          onClose={drawerActions.onClose}
          showChildrenDrawer={drawerActions.showChildrenDrawer}
          onChildrenDrawerClose={drawerActions.onChildrenDrawerClose}
          childrenDrawer={drawerActions.childrenDrawer}
          onLogOut={onLogOut}
          user={user}
        />
      </Main>
      {!hideFooter && footer}
    </StyledLayout>
  );
};
