import {Reverify} from '../../components/Auth/Reverify';
import {useReverify} from '../../hooks/auth';

const ReverifyContaiber = () => {
  const {onReverify, resetError, isLoading, error, message} = useReverify();

  return (
    <Reverify
      titleButton={'send'}
      onSubmit={onReverify}
      resetError={resetError}
      isLoading={isLoading}
      error={error}
      message={message}
    />
  );
};

export default ReverifyContaiber;
