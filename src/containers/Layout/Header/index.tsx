import React from 'react';

import {HeaderComponent} from '../../../components/AppLayout/Header';
import {HeaderPropsT} from '../../../types/layout';

export const Header: React.FC<HeaderPropsT> = ({user, visibleLogin, visibleSignup, drawerActions}) => {
  return (
    <HeaderComponent
      user={user}
      visibleLogin={visibleLogin}
      visibleSignup={visibleSignup}
      drawerActions={drawerActions}
    />
  );
};
