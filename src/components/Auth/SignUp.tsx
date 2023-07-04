import {FC} from 'react';

import {SignUpForm} from './SignUpForm';
import {SignUpComponentPropsT} from '../../types/auth';
import {FormWrapper} from './styles';

export const SignUpComponent: FC<SignUpComponentPropsT> = ({authData}) => {
  return (
    <FormWrapper>
      <SignUpForm authData={authData} />
    </FormWrapper>
  );
};
