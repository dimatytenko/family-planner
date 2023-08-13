import {FC, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {ConfigProvider} from 'antd';
import localeUA from 'antd/locale/uk_UA';
import localeEN from 'antd/locale/en_US';

import {WithChildren} from '../../types/helpers';
import {Footer} from './Footer';
import {Header} from './Header';
import {AppLayout} from '../../components/AppLayout';
import {excludePathsHeader, excludePathsFooter, excludePathsLogin, excludePathsSignup} from '../../constants/routes';
import {useLogOut} from '../../hooks/auth';
import {useDrawer} from '../../hooks/drawer';
import {useLanguage} from '../../hooks/language';
import {useViewer} from '../../hooks/user';
import {Language as LangType} from '../../states/language';

export const Layout: FC<WithChildren> = ({children}) => {
  const user = useViewer();
  const {pathname} = useLocation();
  const drawerActions = useDrawer();
  const onLogOut = useLogOut();
  const {language} = useLanguage();
  const visibleLogin = !excludePathsLogin.some((path) => pathname.includes(path));
  const visibleSignup = !excludePathsSignup.some((path) => pathname.includes(path));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ConfigProvider locale={language === LangType.UA ? localeUA : localeEN}>
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
    </ConfigProvider>
  );
};
