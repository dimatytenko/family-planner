import React from 'react';

import {StyledDrawer} from './styles';
import {DrawerProps} from 'antd';

export const Drawer: React.FC<DrawerProps & {isMobile?: boolean}> = ({isMobile, ...props}) => {
  return <StyledDrawer $isMobile={isMobile} {...props} />;
};
