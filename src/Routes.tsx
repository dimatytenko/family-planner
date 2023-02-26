import React from 'react';
import {Route, Routes} from 'react-router-dom';

import {PrivateRoute} from './containers/PrivateRoute';
import {route} from './constants/routes';
import {Main} from './containers/Main';
import {LogIn} from './containers/Auth/Login';
import {SignUp} from './containers/Auth/SignUp';

const PublicRoutes = [
  <Route key="login" path={route.login.path} element={<LogIn />} />,
  <Route key="signup" path={route.signup.path} element={<SignUp />} />,
];

const PrivateRoutes = [
  <Route
    key="main"
    path={route.main.path}
    element={
      <PrivateRoute path={route.main.path}>
        <Main />
      </PrivateRoute>
    }
  />,
];
const RoutesSwitch: React.FC = () => {
  return (
    <Routes>
      {PublicRoutes}
      {PrivateRoutes}
    </Routes>
  );
};

export default RoutesSwitch;
