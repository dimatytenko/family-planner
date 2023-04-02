import React from 'react';
import {Route, Routes} from 'react-router-dom';

import {PrivateRoute} from './containers/PrivateRoute';
import {route} from './constants/routes';
import {LogIn} from './containers/Auth/Login';
import {SignUp} from './containers/Auth/SignUp';
import {Main} from './containers/Main';
import {Picker} from './containers/Picker';
import {Calendar} from './containers/Calendar';

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
  <Route
    key="picker"
    path={route.picker.path}
    element={
      <PrivateRoute path={route.picker.path}>
        <Picker />
      </PrivateRoute>
    }
  />,
  <Route
    key="calendar"
    path={route.calendar.path}
    element={
      <PrivateRoute path={route.calendar.path}>
        <Calendar />
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
