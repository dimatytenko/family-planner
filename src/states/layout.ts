import {atom} from 'recoil';

export type DrawerStateType = {
  drawer?: boolean;
  childrenDrawer?: boolean;
};

export const DrawerState = atom<DrawerStateType>({
  key: 'drawer',
  default: {
    drawer: false,
    childrenDrawer: false,
  },
});
