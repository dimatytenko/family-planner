import {FC} from 'react';
import {useTranslation} from 'react-i18next';

import {ResetPasswordForm} from './ResetPasswordForm';
import {EmptyComponent} from '../../ui-kit/Empty';
import {IResetPasswordProps} from '../../types/user';
import {FormWrapper} from './styles';

export const ResetPassword: FC<IResetPasswordProps> = ({onSubmit, resetError, isLoading, error, message}) => {
  const {t} = useTranslation();

  if (message) {
    return <EmptyComponent description={message && t(`common:messages.${message}`)} />;
  }
  return (
    <FormWrapper>
      <ResetPasswordForm onSubmit={onSubmit} resetError={resetError} isLoading={isLoading} error={error} />
    </FormWrapper>
  );
};
