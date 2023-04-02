import React from 'react';
import {Drawer, Space, Button} from 'antd';

import {DrawerActionsT} from '../../types/layout';
import {LinkButton} from '../../ui-kit/Button';
import {route} from '../../constants/routes';
import {Drawerlist} from './styles';
import {tryEmailQuery} from '../../queries/try';

export const DrawerComponent: React.FC<DrawerActionsT> = ({
  open,
  onClose,
  onLogOut,
  onChildrenDrawerClose,
  childrenDrawer,
  showChildrenDrawer,
  user,
}) => {
  const onLogOutHandler = () => {
    onLogOut?.();
    onClose?.();
  };
  const sendLetter = async () => {
    const res = await tryEmailQuery();
    console.log('res', res);
  };

  return (
    <>
      <Drawer
        title="Pages"
        placement="right"
        onClose={onClose}
        open={open}
        width={320}
        extra={
          <Space>
            <Button onClick={onLogOutHandler}>Log out</Button>
            <Button onClick={showChildrenDrawer}>{user?.username}</Button>
          </Space>
        }>
        <Drawerlist>
          <LinkButton to={route.picker.path} onClick={onClose}>
            Picker
          </LinkButton>
          <LinkButton to={route.calendar.path} onClick={onClose}>
            Calendar
          </LinkButton>
        </Drawerlist>

        <Drawer title="Account info" width={320} onClose={onChildrenDrawerClose} open={childrenDrawer}>
          <Drawerlist>
            <Button onClick={sendLetter}>Send letter</Button>
          </Drawerlist>
        </Drawer>
      </Drawer>
    </>
  );
};
