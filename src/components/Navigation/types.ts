import {User} from '../../types/auth';

export type NavigationPropsT = {
  user?: User | null;
  onLogOut: () => void;
  visibleLogin?: boolean;
  visibleSignup?: boolean;
};
