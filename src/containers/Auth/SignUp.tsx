import React from 'react';
import {useNavigate} from 'react-router-dom';

import {SignUpComponent} from '../../components/Auth/SignUp';
import {useSignup} from '../../hooks/auth';
import {route} from '../../constants/routes';

export const SignUp = () => {
  const navigate = useNavigate();
  const toLoginRedirect = () => navigate(route.login.path);
  const {onSignup} = useSignup(toLoginRedirect);

  return <SignUpComponent onSubmit={onSignup} />;
};
