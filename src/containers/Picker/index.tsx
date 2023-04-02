import React from 'react';
import {useNavigate} from 'react-router-dom';

import {PickerComponent} from '../../components/Picker';
import {usePick} from '../../hooks/picker';
import {route} from '../../constants/routes';

export const Picker = () => {
  const navigate = useNavigate();
  const toCalendarRedirect = () => navigate(route.main.path);
  console.log('toCalendarRedirect', toCalendarRedirect);
  const {isLoading, formActions} = usePick();
  return <PickerComponent isLoading={isLoading} formActions={formActions} />;
};
