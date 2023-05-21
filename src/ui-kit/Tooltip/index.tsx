import React from 'react';

import {StyledTooltip, StyledTextNote} from './styles';
import {WithChildren} from '../../types/helpers';
import {TooltipProps} from 'antd';

export const Tooltip: React.FC<{text?: string} & TooltipProps & WithChildren> = ({text, placement, ...props}) => {
  return (
    <StyledTooltip
      color={'#e6e6e6'}
      overlayStyle={{
        border: '1px solid #BFB4A8',
        borderRadius: '7px',
      }}
      placement={placement}
      title={<StyledTextNote>{text}</StyledTextNote>}
      {...props}
    />
  );
};
