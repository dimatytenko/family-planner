import React from 'react';
import {Route, Routes} from 'react-router-dom';

import {route} from './constants/routes';
import {Main} from './containers/Main';

const PublicRoutes = [<Route key="main" path={route.main.path} element={<Main />} />];

const RoutesSwitch: React.FC = () => {
  return <Routes>{PublicRoutes}</Routes>;
};

export default RoutesSwitch;
