import React from 'react';
import {Route, Routes} from 'react-router-dom';

import {PrivateRoute} from './containers/Routes';
import {PublicRoute} from './containers/Routes';
import {route} from './constants/routes';
import {LogIn} from './containers/Auth/Login';
import {SignUp} from './containers/Auth/SignUp';
import {Main} from './containers/Main';
import {Picker} from './containers/Picker';
import {PickerEdit} from './containers/Picker/Edit';
import {Calendar} from './containers/Calendar';
import {VerifyContainer} from './containers/Auth/Verify';
import {ReverifyContaiber} from './containers/Auth/Reverify';
import {ForgotPasswordContainer} from './containers/Auth/ForgotPassword';
import {ChangePasswordContainer} from './containers/Account/ChangePassword';
import {SpaceContainer} from './containers/Space';
import {SpaceEditContainer} from './containers/Space/Edit';
import {TaskContainer} from './containers/Task';
import {EditTaskContainer} from './containers/Task/Edit';

const PublicRoutes = [
  <Route
    key="login"
    path={route.login.path}
    element={
      <PublicRoute path={route.login.path}>
        <LogIn />
      </PublicRoute>
    }
  />,
  <Route
    key="signup"
    path={route.signup.path}
    element={
      <PublicRoute path={route.signup.path}>
        <SignUp />
      </PublicRoute>
    }
  />,
  <Route
    key="verify"
    path={route.verify.path}
    element={
      <PublicRoute path={route.reverify.path}>
        <VerifyContainer />
      </PublicRoute>
    }
  />,
  <Route
    key="reverify"
    path={route.reverify.path}
    element={
      <PublicRoute path={route.reverify.path}>
        <ReverifyContaiber />
      </PublicRoute>
    }
  />,
  <Route
    key="forgotPassword"
    path={route.forgotPassword.path}
    element={
      <PublicRoute path={route.forgotPassword.path}>
        <ForgotPasswordContainer />
      </PublicRoute>
    }
  />,
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
    key="pickerEdit"
    path={route.pickerEdit.path}
    element={
      <PrivateRoute path={route.pickerEdit.path}>
        <PickerEdit />
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
  <Route
    key="changePassword"
    path={route.changePassword.path}
    element={
      <PrivateRoute path={route.changePassword.path}>
        <ChangePasswordContainer />
      </PrivateRoute>
    }
  />,
  <Route
    key="createSpace"
    path={route.createSpace.path}
    element={
      <PrivateRoute path={route.createSpace.path}>
        <SpaceContainer />
      </PrivateRoute>
    }
  />,
  <Route
    key="spaceEdit"
    path={route.spaceEdit.path}
    element={
      <PrivateRoute path={route.spaceEdit.path}>
        <SpaceEditContainer />
      </PrivateRoute>
    }
  />,
  <Route
    key="createTask"
    path={route.createTask.path}
    element={
      <PrivateRoute path={route.createTask.path}>
        <TaskContainer />
      </PrivateRoute>
    }
  />,
  <Route
    key="editTask"
    path={route.editTask.path}
    element={
      <PrivateRoute path={route.editTask.path}>
        <EditTaskContainer />
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
