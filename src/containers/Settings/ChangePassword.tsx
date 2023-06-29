import React from 'react';

import {ResetPassword} from '../../components/Account/ResetPassword';
import {useChangePassword} from '../../hooks/user';

const ChangePasswordContainer = () => {
  const {onSubmit, resetError, isLoading, error, message} = useChangePassword();

  return (
    <ResetPassword onSubmit={onSubmit} resetError={resetError} isLoading={isLoading} error={error} message={message} />
  );
};

export default ChangePasswordContainer;
