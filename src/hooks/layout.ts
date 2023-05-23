import {useRecoilState} from 'recoil';

import {DrawerState} from '../states/layout';

export const useDrawer = () => {
  const [{drawer, childrenDrawer}, setDrawer] = useRecoilState(DrawerState);
  const showDrawer = () => {
    setDrawer((prev) => ({...prev, drawer: true}));
  };

  const onClose = () => {
    setDrawer((prev) => ({...prev, drawer: false}));
  };

  const showChildrenDrawer = () => {
    setDrawer((prev) => ({...prev, childrenDrawer: true}));
  };

  const onChildrenDrawerClose = () => {
    setDrawer((prev) => ({...prev, childrenDrawer: false}));
  };

  return {open: drawer, showDrawer, onClose, childrenDrawer, showChildrenDrawer, onChildrenDrawerClose};
};
