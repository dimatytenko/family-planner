import React from 'react';
import {ExclamationCircleOutlined} from '@ant-design/icons';

import {StyledLabel, StyledLabelIcon} from './styles';
import {LabelProps} from './types';

export const Label: React.FC<LabelProps> = ({variant, label, icon}) => {
  return (
    <StyledLabel variant={variant}>
      {icon && <StyledLabelIcon>{variant === 'error' && <ExclamationCircleOutlined />}</StyledLabelIcon>}
      {label}
    </StyledLabel>
  );
};
