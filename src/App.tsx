import React from 'react';
import {Layout} from './containers/Layout';
import RoutesSwitch from './Routes';
import {Normalize} from 'styled-normalize';

function App() {
  return (
    <>
      <Layout>
        <RoutesSwitch />
      </Layout>
      <Normalize />
    </>
  );
}

export default App;
