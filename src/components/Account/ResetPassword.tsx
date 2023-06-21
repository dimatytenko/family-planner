import React from 'react';

import {ResetPasswordForm} from './ResetPasswordForm';
import {EmptyComponent} from '../../ui-kit/Empty';
import {IResetPasswordProps} from '../../types/user';
import {FormWrapper} from './styles';

export const ResetPassword: React.FC<IResetPasswordProps> = ({onSubmit, resetError, isLoading, error, message}) => {
  if (message) {
    return <EmptyComponent description={message} />;
  }
  return (
    <FormWrapper>
      <ResetPasswordForm onSubmit={onSubmit} resetError={resetError} isLoading={isLoading} error={error} />;
    </FormWrapper>
  );
};
