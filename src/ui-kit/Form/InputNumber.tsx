import React from 'react';

import {InputNumberPropsT} from './types';
import {StyledInputNumber} from './styles';

export const InputNumber: React.FC<InputNumberPropsT> = ({...props}) => {
  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    let valueTemp = value;
    if (value.charAt(value.length - 1) === '.' || value === '-') {
      valueTemp = value.slice(0, -1);
    }
    return valueTemp.replace(/0*(\d+)/, '$1');
  };

  return <StyledInputNumber onBlur={handleBlur} {...props} />;
};
