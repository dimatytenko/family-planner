import {FC, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {isMobile} from 'react-device-detect';

import {StyledLayout, Main, Container} from './styles';
import {DrawerComponent} from './Drawer';
import {IAppLayoutProps} from '../../types/layout';
import {NoteModalContainer} from '../../containers/NoteModal';

export const AppLayout: FC<IAppLayoutProps> = ({
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
      <Main $isMobile={isMobile}>
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
      <NoteModalContainer />

      {!hideFooter && footer}
    </StyledLayout>
  );
};
