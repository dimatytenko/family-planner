import {FC} from 'react';

import {PickerForm} from './PickerForm';
import {PickerComponentPropsT} from '../../types/picker';
import {BackButtonStyled} from './styles';

export const PickerComponent: FC<PickerComponentPropsT> = ({isLoading, initialValues, formActions, goBack}) => {
  return (
    <>
      <BackButtonStyled onClick={goBack} />
      <PickerForm isLoading={isLoading} initialValues={initialValues} formActions={formActions} />
    </>
  );
};
