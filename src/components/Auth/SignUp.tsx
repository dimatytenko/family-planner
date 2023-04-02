import React from 'react';

import {SignUpForm} from './SignUpForm';
import {SignUpComponentPropsT} from '../../types/auth';

export const SignUpComponent: React.FC<SignUpComponentPropsT> = ({authData}) => {
  return <SignUpForm authData={authData} />;
};
