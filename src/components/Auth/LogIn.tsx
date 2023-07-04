import {FC} from 'react';
import {useTranslation} from 'react-i18next';

import {LogInForm} from './LogInForm';
import {LoginComponentPropsT} from '../../types/auth';
import {FormWrapper, StyledButton, ButtonsWrapper} from './styles';

export const LogInComponent: FC<LoginComponentPropsT> = ({authData, goToReverify, goToForgotPassword}) => {
  const {t} = useTranslation();

  return (
    <FormWrapper>
      <LogInForm authData={authData} />
      <ButtonsWrapper>
        <StyledButton onClick={goToReverify}>{t('auth:buttons.reverifyPassword')}</StyledButton>
        <StyledButton onClick={goToForgotPassword}>{t('auth:buttons.forgotPassword')}</StyledButton>
      </ButtonsWrapper>
    </FormWrapper>
  );
};
