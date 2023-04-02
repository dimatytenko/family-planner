import {User} from './auth';
import {WithChildren} from '../types/helpers';

export type DrawerActionsT = {
  showDrawer?: () => void;
  onClose?: () => void;
  open?: boolean;
  onLogOut?: () => void;
  showChildrenDrawer?: () => void;
  onChildrenDrawerClose?: () => void;
  childrenDrawer?: boolean;
  user?: User | null;
};

export type HeaderComponentPropsT = {
  user?: User | null;
  visibleLogin?: boolean;
  visibleSignup?: boolean;
  drawerActions: DrawerActionsT;
};

export type HeaderPropsT = HeaderComponentPropsT;

export type NavigationPropsT = {
  user?: User | null;
  visibleLogin?: boolean;
  visibleSignup?: boolean;
  drawerActions: DrawerActionsT;
};

export type AppLayoutProps = WithChildren & {
  hideHeader?: boolean;
  hideFooter?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  drawerActions: DrawerActionsT;
  onLogOut: () => void;
  user?: User | null;
};
