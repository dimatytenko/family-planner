import React from 'react';
import {Drawer, Avatar as AntdAvatar} from 'antd';
import {LogoutOutlined} from '@ant-design/icons';

import {IDrawerActions} from '../../types/layout';
import {LinkButton, Button} from '../../ui-kit/Button';
import {route} from '../../constants/routes';
import {Drawerlist, StyledLogout, AvatarButton, DrawerElWrapper, DrawerTitle, StyledClose} from './styles';
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
        title={<DrawerTitle>Pages</DrawerTitle>}
        closeIcon={
          <Button>
            <StyledClose />
          </Button>
        }
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
          <LinkButton variant="tertiary" to={route.calendar.path} onClick={onClose}>
            Calendar
          </LinkButton>
        </Drawerlist>

        <Drawer
          title={<DrawerTitle>Account info</DrawerTitle>}
          closeIcon={
            <Button>
              <StyledClose />
            </Button>
          }
          width={320}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}>
          <AccountContainer />
        </Drawer>
      </Drawer>
    </>
  );
};
