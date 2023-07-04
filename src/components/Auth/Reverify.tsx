import {FC} from 'react';
import {useTranslation} from 'react-i18next';

import {IReverifyProps} from '../../types/auth';
import {ReverifyForm} from './ReverifyForm';
import {EmptyComponent} from '../../ui-kit/Empty';
import {FormWrapper} from './styles';

export const Reverify: FC<IReverifyProps> = ({titleButton, onSubmit, resetError, isLoading, error, message}) => {
  const {t} = useTranslation();

  if (message) {
    return <EmptyComponent description={message && t(`common:messages.${message}`)} />;
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
