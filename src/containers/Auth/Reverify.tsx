import React from 'react';

import {Reverify} from '../../components/Auth/Reverify';
import {useReverify} from '../../hooks/auth';

export const ReverifyContaiber = () => {
  const {onReverify, resetError, isLoading, error, message} = useReverify();

  return (
    <Reverify
      titleButton={'Send'}
      onSubmit={onReverify}
      resetError={resetError}
      isLoading={isLoading}
      error={error}
      message={message}
    />
  );
};
