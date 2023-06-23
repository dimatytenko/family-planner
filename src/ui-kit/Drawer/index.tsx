import React from 'react';

import {StyledDrawer} from './styles';
import {DrawerProps} from 'antd';

export const Drawer: React.FC<DrawerProps> = ({...props}) => {
  return <StyledDrawer {...props} />;
};
