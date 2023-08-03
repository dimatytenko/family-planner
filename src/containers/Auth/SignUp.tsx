import {useNavigate} from 'react-router-dom';

import {SignUpComponent} from '../../components/Auth/SignUp';
import {useSignup} from '../../hooks/auth';
import {route} from '../../constants/routes';
import {HelmetComponent} from '../../components/Helmet';

const SignUp = () => {
  const navigate = useNavigate();

  const onRedirect = () => navigate(route.verify.path + '?message=register');

  const authData = useSignup(onRedirect);

  return (
    <>
      <HelmetComponent title={'register'} />
      <SignUpComponent authData={authData} />;
    </>
  );
};

export default SignUp;
