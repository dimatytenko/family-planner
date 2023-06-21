import React from 'react';

import {SignUpForm} from './SignUpForm';
import {SignUpComponentPropsT} from '../../types/auth';
import {FormWrapper} from './styles';

export const SignUpComponent: React.FC<SignUpComponentPropsT> = ({authData}) => {
  return (
    <FormWrapper>
      <SignUpForm authData={authData} />
    </FormWrapper>
  );
};
