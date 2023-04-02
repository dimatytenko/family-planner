import React from 'react';
import {useNavigate} from 'react-router-dom';

import {useLogin} from '../../hooks/auth';
import {LogInComponent} from '../../components/Auth/LogIn';
import {route} from '../../constants/routes';

export const LogIn = () => {
  const navigate = useNavigate();
  const toMainRedirect = () => navigate(route.main.path);
  const authData = useLogin(toMainRedirect);

  return <LogInComponent authData={authData} />;
};
