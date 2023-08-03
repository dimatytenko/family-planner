import React from 'react';
import {ThemeProvider} from 'styled-components';
import {HelmetProvider} from 'react-helmet-async';

import RecoilProvider from './containers/RecoilProvider';
import {defaultTheme} from './ui-kit/theme/theme';
import {Layout} from './containers/Layout';
import RoutesSwitch from './Routes';
import 'modern-normalize';
import {GlobalStyles} from './styles/index';
import CurrentUser from './containers/CurrentUser';
import './ui-kit/Popconfirm/styles.css';
import './ui-kit/Form/styles.css';
import './ui-kit/Tour/styles.css';
import './ui-kit/Tooltip/styles.css';

function App() {
  return (
    <RecoilProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <CurrentUser>
          <HelmetProvider>
            <Layout>
              <RoutesSwitch />
            </Layout>
          </HelmetProvider>
        </CurrentUser>
      </ThemeProvider>
    </RecoilProvider>
  );
}

export default App;
