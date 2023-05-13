import React from 'react';
import {Skeleton} from 'antd';

import {PickerForm} from './PickerForm';
import {PickerComponentPropsT} from '../../types/picker';
import {BackButton, ArrowLeftIcon} from './styles';

export const PickerComponent: React.FC<PickerComponentPropsT> = ({isLoading, initialValues, formActions, goBack}) => {
  if (isLoading?.page || !formActions.sizeForm) return <Skeleton active />;

  return (
    <>
      <BackButton onClick={goBack}>
        <ArrowLeftIcon />
        Go back
      </BackButton>
      <PickerForm isLoading={isLoading} initialValues={initialValues} formActions={formActions} />
    </>
  );
};
