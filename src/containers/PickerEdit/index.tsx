import React from 'react';
import {useNavigate} from 'react-router-dom';

import {PickerComponent} from '../../components/Picker';
import {usePick} from '../../hooks/picker';
import {route} from '../../constants/routes';

export const PickerEdit = () => {
  const navigate = useNavigate();
  const toCalendar = () => navigate(route.calendar.path);
  const {isLoading, initialValues, formActions} = usePick(toCalendar);
  const goBack = () => navigate(-1);

  return (
    <PickerComponent isLoading={isLoading} initialValues={initialValues} formActions={formActions} goBack={goBack} />
  );
};
