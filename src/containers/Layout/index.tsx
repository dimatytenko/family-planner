import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import {WithChildren} from '../../types/helpers';
import {Footer} from './Footer';
import {Header} from './Header';
import {AppLayout} from '../../components/AppLayout';
import {excludePathsHeader, excludePathsFooter, excludePathsLogin, excludePathsSignup} from '../../constants/routes';
import {useViewer, useLogOut} from '../../hooks/auth';

export const Layout: React.FC<WithChildren> = ({children}) => {
  const {pathname} = useLocation();
  const user = useViewer();
  const onLogOut = useLogOut();
  const visibleLogin = !excludePathsLogin.some((path) => pathname.includes(path));
  const visibleSignup = !excludePathsSignup.some((path) => pathname.includes(path));
  console.log('visibleLogin', visibleLogin);
  console.log('visibleSignup', visibleSignup);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <AppLayout
      hideFooter={excludePathsFooter.some((path) => pathname.includes(path))}
      hideHeader={excludePathsHeader.some((path) => pathname.includes(path))}
      footer={<Footer />}
      header={<Header user={user} onLogOut={onLogOut} visibleLogin={visibleLogin} visibleSignup={visibleSignup} />}>
      {children}
    </AppLayout>
  );
};
