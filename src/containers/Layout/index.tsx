import React, {useEffect} from 'react';
import {WithChildren} from '../../types/helpers';
import {Footer} from './Footer';
import {Header} from './Header';
import {AppLayout} from '../../components/AppLayout';
import {useLocation} from 'react-router-dom';
import {excludePathsHeader, excludePathsFooter} from '../../constants/routes';

export const Layout: React.FC<WithChildren> = ({children}) => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <AppLayout
      hideFooter={excludePathsFooter.some((path) => pathname.includes(path))}
      hideHeader={excludePathsHeader.some((path) => pathname.includes(path))}
      footer={<Footer />}
      header={<Header />}>
      {children}
    </AppLayout>
  );
};
