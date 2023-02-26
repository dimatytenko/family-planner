import React from 'react';

import {SignUpForm} from './SignUpForm';
import {SignUpComponentPropsT} from './types';

export const SignUpComponent: React.FC<SignUpComponentPropsT> = ({onSubmit}) => {
  return <SignUpForm onSubmit={onSubmit} />;
};
