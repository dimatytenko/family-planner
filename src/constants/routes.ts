import {Route} from '../helpers/Route';

// export enum SearchKey {
//   type = 'type',
// }

export const route = {
  main: Route.of({path: '/'}),
  login: Route.of({path: '/'}),
  register: Route.of({path: '/register'}),
};

export const paths = {
  main: '',
  login: 'login',
  register: 'register',
};

export const excludePathsHeader = [];
export const excludePathsFooter = [];
