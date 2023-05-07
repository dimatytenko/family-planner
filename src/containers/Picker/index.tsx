import React from 'react';

import {PickerComponent} from '../../components/Picker';
import {usePick} from '../../hooks/picker';

export const Picker = () => {
  const {isLoading, formActions} = usePick();
  return <PickerComponent isLoading={isLoading} formActions={formActions} />;
};
