import {useNavigate} from 'react-router-dom';

import {useLogin} from '../../hooks/auth';
import {LogInComponent} from '../../components/Auth/LogIn';
import {route} from '../../constants/routes';

const LogIn = () => {
  const navigate = useNavigate();
  const authData = useLogin();

  const goToReverify = () => {
    navigate(route.reverify.path);
  };
  const goToForgotPassword = () => {
    navigate(route.forgotPassword.path);
  };

  return <LogInComponent authData={authData} goToReverify={goToReverify} goToForgotPassword={goToForgotPassword} />;
};

export default LogIn;
