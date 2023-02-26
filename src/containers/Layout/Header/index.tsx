import React from 'react';

import {HeaderComponent} from '../../../components/AppLayout/Header';
import {HeaderPropsT} from '../../../components/AppLayout/types';

export const Header: React.FC<HeaderPropsT> = ({user, onLogOut, visibleLogin, visibleSignup}) => {
  return <HeaderComponent user={user} onLogOut={onLogOut} visibleLogin={visibleLogin} visibleSignup={visibleSignup} />;
};
