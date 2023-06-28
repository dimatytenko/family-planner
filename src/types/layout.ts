import {IUser} from '../types/user';
import {WithChildren} from '../types/helpers';
import {TUserInfo} from '../types/user';
import {Language} from '../states/layout';

export interface IDrawerActions {
  showDrawer?: () => void;
  onClose?: () => void;
  open?: boolean;
  onLogOut?: () => void;
  showChildrenDrawer?: () => void;
  onChildrenDrawerClose?: () => void;
  childrenDrawer?: boolean;
  user?: IUser | null;
  userInfo?: TUserInfo;
}

export interface IHeaderComponentProps {
  user?: IUser | null;
  visibleLogin?: boolean;
  visibleSignup?: boolean;
  drawerActions: IDrawerActions;
}

export type HeaderPropsT = IHeaderComponentProps;

export interface INavigationProps {
  user?: IUser | null;
  visibleLogin?: boolean;
  visibleSignup?: boolean;
  drawerActions: IDrawerActions;
}

export interface IAppLayoutProps extends WithChildren {
  hideHeader?: boolean;
  hideFooter?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  drawerActions: IDrawerActions;
  onLogOut: () => void;
  user?: IUser | null;
}

export interface INavigationProps {
  user?: IUser | null;
  visibleLogin?: boolean;
  visibleSignup?: boolean;
  drawerActions: IDrawerActions;
}

export interface ILanguageProps {
  language: Language | null;
  onChangeLanguage: (language: Language) => void;
  languageValues: {country: Language}[];
}
