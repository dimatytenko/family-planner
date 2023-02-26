import React from 'react';

import {LogInForm} from './LogInForm';
import {LoginComponentPropsT} from './types';

export const LogInComponent: React.FC<LoginComponentPropsT> = ({onSubmit}) => {
  return <LogInForm onSubmit={onSubmit} />;
};
