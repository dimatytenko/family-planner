import React from 'react';
import {ThemeProvider} from 'styled-components';

import {defaultTheme} from './ui-kit/theme/theme';
import {Layout} from './containers/Layout';
import RoutesSwitch from './Routes';
import 'modern-normalize';
import {GlobalStyles} from './styles/index';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Layout>
        <RoutesSwitch />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
