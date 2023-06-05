import React from 'react';

import {Reverify} from '../../components/Auth/Reverify';
import {useReverify} from '../../hooks/auth';

export const ForgotPasswordContainer = () => {
  const {onForgetPassword, resetError, isLoading, error, message} = useReverify();

  return (
    <Reverify
      titleButton={'Get a new password'}
      onSubmit={onForgetPassword}
      resetError={resetError}
      isLoading={isLoading}
      error={error}
      message={message}
    />
  );
};