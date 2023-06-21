import React from 'react';

import {IReverifyProps} from '../../types/auth';
import {ReverifyForm} from './ReverifyForm';
import {EmptyComponent} from '../../ui-kit/Empty';
import {FormWrapper} from './styles';

export const Reverify: React.FC<IReverifyProps> = ({titleButton, onSubmit, resetError, isLoading, error, message}) => {
  if (message) {
    return <EmptyComponent description={message} />;
  }
  return (
    <FormWrapper>
      <ReverifyForm
        titleButton={titleButton}
        onSubmit={onSubmit}
        resetError={resetError}
        isLoading={isLoading}
        error={error}
      />
    </FormWrapper>
  );
};
