import {ResetPassword} from '../../components/Account/ResetPassword';
import {useChangePassword} from '../../hooks/user';
import {HelmetComponent} from '../../components/Helmet';

const ChangePasswordContainer = () => {
  const {onSubmit, resetError, isLoading, error, message} = useChangePassword();

  return (
    <>
      <HelmetComponent title={'changePassword'} />

      <ResetPassword
        onSubmit={onSubmit}
        resetError={resetError}
        isLoading={isLoading}
        error={error}
        message={message}
      />
    </>
  );
};

export default ChangePasswordContainer;
