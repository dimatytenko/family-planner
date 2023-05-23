import {Route} from '../helpers/Route';

// export enum SearchKey {
//   type = 'type',
// }

export const route = {
  main: Route.of({path: '/'}),
  login: Route.of({path: '/login'}),
  signup: Route.of({path: '/signup'}),
  picker: Route.of({path: '/picker'}),
  pickerEdit: Route.of<{id: string}>({path: '/picker/:id'}),
  calendar: Route.of({path: '/calendar'}),
  verify: Route.of({path: '/verify'}),
  reverify: Route.of({path: '/reverify'}),
  forgotPassword: Route.of({path: '/forgot-password'}),
  changePassword: Route.of({path: '/change-password'}),
};

export const paths = {
  main: '',
  login: 'login',
  signup: 'signup',
};

export const excludePathsHeader = [];
export const excludePathsFooter = [];

export const excludePathsLogin = [paths.login];
export const excludePathsSignup = [paths.signup];
