import {FC} from 'react';
import {LogoutOutlined} from '@ant-design/icons';
import {isMobile} from 'react-device-detect';
import {useTranslation} from 'react-i18next';

import {IDrawerActions} from '../../types/layout';
import {LinkButton} from '../../ui-kit/Button';
import {route} from '../../constants/routes';
import {Drawerlist, StyledLogout, DrawerElWrapper, DrawerTitle, StyledClose} from './styles';
import {AccountContainer} from '../../containers/Settings/Account';
import {Avatar} from '../../ui-kit/Avatar';
import {Drawer} from '../../ui-kit/Drawer';

export const DrawerComponent: FC<IDrawerActions> = ({
  open,
  onClose,
  onLogOut,
  onChildrenDrawerClose,
  childrenDrawer,
  showChildrenDrawer,
  user,
}) => {
  const {t} = useTranslation();

  const onLogOutHandler = () => {
    onLogOut?.();
    onClose?.();
  };

  return (
    <>
      <Drawer
        isMobile={isMobile}
        title={<DrawerTitle>{t('common:titles.pages')}</DrawerTitle>}
        closeIcon={<StyledClose />}
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
            {t('common:buttons.calendar')}
          </LinkButton>
          <LinkButton variant="tertiary" to={route.picker.path} onClick={onClose}>
            {t('common:buttons.addEvent')}
          </LinkButton>
          <LinkButton variant="tertiary" to={route.createSpace.path} onClick={onClose}>
            {t('common:buttons.createSpace')}
          </LinkButton>
        </Drawerlist>

        <Drawer
          isMobile={isMobile}
          title={<DrawerTitle>{t('common:titles.accountInfo')}</DrawerTitle>}
          closeIcon={<StyledClose />}
          width={320}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}>
          <AccountContainer />
        </Drawer>
      </Drawer>
    </>
  );
};
