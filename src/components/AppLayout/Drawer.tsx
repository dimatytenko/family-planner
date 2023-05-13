import React from 'react';
import {Drawer, Avatar as AntdAvatar} from 'antd';
import {LogoutOutlined} from '@ant-design/icons';

import {IDrawerActions} from '../../types/layout';
import {LinkButton} from '../../ui-kit/Button';
import {route} from '../../constants/routes';
import {Drawerlist, StyledLogout, AvatarButton, DrawerElWrapper} from './styles';
// import {tryEmailQuery} from '../../queries/try';
import {AccountContainer} from '../../containers/Settings/Account';

export const DrawerComponent: React.FC<IDrawerActions> = ({
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

  return (
    <>
      <Drawer
        title="Pages"
        placement="right"
        onClose={onClose}
        open={open}
        width={320}
        extra={
          <DrawerElWrapper>
            <AvatarButton onClick={showChildrenDrawer}>
              <AntdAvatar src={user?.avatar} />
            </AvatarButton>
            <StyledLogout onClick={onLogOutHandler}>
              <LogoutOutlined />
            </StyledLogout>
          </DrawerElWrapper>
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
          <AccountContainer />
        </Drawer>
      </Drawer>
    </>
  );
};
