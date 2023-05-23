import React from 'react';

import {StyledSelect} from './styles';
import {SelectPropsT} from './types';

export const Select: React.FC<SelectPropsT> = ({...props}) => {
  // eslint-disable-next-line
  // @ts-ignore
  return <StyledSelect {...props} />;
};
