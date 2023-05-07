import React from 'react';
import {Skeleton} from 'antd';

import {PickerForm} from './PickerForm';
import {PickerComponentPropsT} from '../../types/picker';

export const PickerComponent: React.FC<PickerComponentPropsT> = ({isLoading, initialValues, formActions}) => {
  if (isLoading?.page || !formActions.sizeForm) return <Skeleton active />;

  return <PickerForm isLoading={isLoading} initialValues={initialValues} formActions={formActions} />;
};
