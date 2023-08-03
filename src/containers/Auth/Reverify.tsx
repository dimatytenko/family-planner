import {Reverify} from '../../components/Auth/Reverify';
import {useReverify} from '../../hooks/auth';
import {HelmetComponent} from '../../components/Helmet';

const ReverifyContaiber = () => {
  const {onReverify, resetError, isLoading, error, message} = useReverify();

  return (
    <>
      <HelmetComponent title={'reverify'} />

      <Reverify
        titleButton={'send'}
        onSubmit={onReverify}
        resetError={resetError}
        isLoading={isLoading}
        error={error}
        message={message}
      />
    </>
  );
};

export default ReverifyContaiber;
