import React from 'react';

import {DatePickerStyled} from './styles';
import {DatePickerPropsT} from './types';

export const DatePicker: React.FC<DatePickerPropsT> = ({...props}) => {
  // eslint-disable-next-line
  // @ts-ignore
  return <DatePickerStyled {...props} />;
};
