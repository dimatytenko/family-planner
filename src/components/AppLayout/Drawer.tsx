import React from 'react';
import {Drawer} from 'antd';
import {LogoutOutlined} from '@ant-design/icons';

import {IDrawerActions} from '../../types/layout';
import {LinkButton, Button} from '../../ui-kit/Button';
import {route} from '../../constants/routes';
import {Drawerlist, StyledLogout, DrawerElWrapper, DrawerTitle, StyledClose} from './styles';
import {AccountContainer} from '../../containers/Settings/Account';
import {Avatar} from '../../ui-kit/Avatar';

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
            <Avatar onClick={showChildrenDrawer} src={user?.avatar} />
            <StyledLogout onClick={onLogOutHandler}>
              <LogoutOutlined />
            </StyledLogout>
          </DrawerElWrapper>
        }>
        <Drawerlist>
          <LinkButton variant="tertiary" to={route.calendar.path} onClick={onClose}>
            Calendar
          </LinkButton>
          <LinkButton variant="tertiary" to={route.createSpace.path} onClick={onClose}>
            Create a new Space
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
