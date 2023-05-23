import React from 'react';
import {useNavigate} from 'react-router-dom';

import {SignUpComponent} from '../../components/Auth/SignUp';
import {useSignup} from '../../hooks/auth';
import {route} from '../../constants/routes';
import {checkEmail} from '../../constants/links';

export const SignUp = () => {
  const navigate = useNavigate();
  const onRedirect = () => navigate(route.verify.path + checkEmail);
  const authData = useSignup(onRedirect);

  return <SignUpComponent authData={authData} />;
};
