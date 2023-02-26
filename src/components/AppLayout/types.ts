import {User} from '../../types/auth';

export type HeaderPropsT = {
  user?: User | null;
  onLogOut: () => void;
  visibleLogin?: boolean;
  visibleSignup?: boolean;
};

export type HeaderComponentPropsT = HeaderPropsT;
