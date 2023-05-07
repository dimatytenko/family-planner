import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import {WithChildren} from '../../types/helpers';
import {Footer} from './Footer';
import {Header} from './Header';
import {AppLayout} from '../../components/AppLayout';
import {excludePathsHeader, excludePathsFooter, excludePathsLogin, excludePathsSignup} from '../../constants/routes';
import {useLogOut} from '../../hooks/auth';
import {useDrawer} from '../../hooks/layout';
import {useViewer} from '../../hooks/user';

export const Layout: React.FC<WithChildren> = ({children}) => {
  const user = useViewer();
  const {pathname} = useLocation();
  const drawerActions = useDrawer();
  const onLogOut = useLogOut();
  const visibleLogin = !excludePathsLogin.some((path) => pathname.includes(path));
  const visibleSignup = !excludePathsSignup.some((path) => pathname.includes(path));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <AppLayout
      hideFooter={excludePathsFooter.some((path) => pathname.includes(path))}
      hideHeader={excludePathsHeader.some((path) => pathname.includes(path))}
      drawerActions={drawerActions}
      user={user}
      onLogOut={onLogOut}
      footer={<Footer />}
      header={
        <Header user={user} visibleLogin={visibleLogin} visibleSignup={visibleSignup} drawerActions={drawerActions} />
      }>
      {children}
    </AppLayout>
  );
};
