import React from 'react';

import {LogInForm} from './LogInForm';
import {LoginComponentPropsT} from '../../types/auth';
import {FormWrapper, StyledButton, ButtonsWrapper} from './styles';

export const LogInComponent: React.FC<LoginComponentPropsT> = ({authData, goToReverify, goToForgotPassword}) => {
  return (
    <FormWrapper>
      <LogInForm authData={authData} />
      <ButtonsWrapper>
        <StyledButton onClick={goToReverify}>Reverify email</StyledButton>
        <StyledButton onClick={goToForgotPassword}>Forgot password</StyledButton>
      </ButtonsWrapper>
    </FormWrapper>
  );
};
