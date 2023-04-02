import React from 'react';

import {LogInForm} from './LogInForm';
import {LoginComponentPropsT} from '../../types/auth';

export const LogInComponent: React.FC<LoginComponentPropsT> = ({authData}) => {
  return <LogInForm authData={authData} />;
};
