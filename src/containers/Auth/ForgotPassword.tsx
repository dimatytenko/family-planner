import {Reverify} from '../../components/Auth/Reverify';
import {useReverify} from '../../hooks/auth';
import {HelmetComponent} from '../../components/Helmet';

const ForgotPasswordContainer = () => {
  const {onForgetPassword, resetError, isLoading, error, message} = useReverify();

  return (
    <>
      <HelmetComponent title={'forgotPassword'} />

      <Reverify
        titleButton={'getNewPassword'}
        onSubmit={onForgetPassword}
        resetError={resetError}
        isLoading={isLoading}
        error={error}
        message={message}
      />
    </>
  );
};

export default ForgotPasswordContainer;
