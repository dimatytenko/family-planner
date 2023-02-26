import React from 'react';
import {ThemeProvider} from 'styled-components';

import RecoilProvider from './containers/RecoilProvider';
import {defaultTheme} from './ui-kit/theme/theme';
import {Layout} from './containers/Layout';
import RoutesSwitch from './Routes';
import 'modern-normalize';
import {GlobalStyles} from './styles/index';
import CurrentUser from './containers/CurrentUser';

function App() {
  return (
    <RecoilProvider>
      <CurrentUser>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <Layout>
            <RoutesSwitch />
          </Layout>
        </ThemeProvider>
      </CurrentUser>
    </RecoilProvider>
  );
}

export default App;
