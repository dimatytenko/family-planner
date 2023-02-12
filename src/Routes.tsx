import React from 'react';
import {Route, Routes} from 'react-router-dom';

import {route} from './constants/routes';
import {Main} from './containers/Main';
import {Login} from './containers/Auth/Login';
import {Register} from './containers/Auth/Register';

const PublicRoutes = [
  <Route key="main" path={route.main.path} element={<Main />} />,
  <Route key="login" path={route.login.path} element={<Login />} />,
  <Route key="register" path={route.register.path} element={<Register />} />,
];

const RoutesSwitch: React.FC = () => {
  return <Routes>{PublicRoutes}</Routes>;
};

export default RoutesSwitch;
