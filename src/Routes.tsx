import React, {lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

import {PrivateRoute} from './containers/Routes';
import {PublicRoute} from './containers/Routes';
import {route} from './constants/routes';
import {Spinner} from './ui-kit/Spinner';

import {Main} from './containers/Main';
import {Picker} from './containers/Picker';
import {PickerEdit} from './containers/Picker/Edit';
import {SpaceContainer} from './containers/Space';
import {SpaceEditContainer} from './containers/Space/Edit';
import {TaskContainer} from './containers/Task';
import {EditTaskContainer} from './containers/Task/Edit';

const ChangePasswordContainer = lazy(() => import('./containers/Settings/ChangePassword'));
const VerifyContainer = lazy(() => import('./containers/Auth/Verify'));
const ReverifyContaiber = lazy(() => import('./containers/Auth/Reverify'));
const ForgotPasswordContainer = lazy(() => import('./containers/Auth/ForgotPassword'));
const LogIn = lazy(() => import('./containers/Auth/Login'));
const SignUp = lazy(() => import('./containers/Auth/SignUp'));
const Calendar = lazy(() => import('./containers/Calendar'));
const NotFoundContainer = lazy(() => import('./containers/Layout/NotFound'));

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
    <Suspense fallback={<Spinner />}>
      <Routes>
        {PublicRoutes}
        {PrivateRoutes}
        <Route path="*" element={<NotFoundContainer />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesSwitch;
