import React from 'react';
import {Skeleton} from 'antd';

import {PickerForm} from './PickerForm';
import {PickerComponentPropsT} from '../../types/picker';
import {BackButtonStyled} from './styles';

export const PickerComponent: React.FC<PickerComponentPropsT> = ({isLoading, initialValues, formActions, goBack}) => {
  if (isLoading?.page || !formActions.sizeForm) return <Skeleton active />;

  return (
    <>
      <BackButtonStyled onClick={goBack} />
      <PickerForm isLoading={isLoading} initialValues={initialValues} formActions={formActions} />
    </>
  );
};
