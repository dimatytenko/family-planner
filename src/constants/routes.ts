import {Route} from '../helpers/Route';

// export enum SearchKey {
//   type = 'type',
// }

export const route = {
  main: Route.of({path: '/'}),
  login: Route.of({path: '/login'}),
  signup: Route.of({path: '/signup'}),
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
