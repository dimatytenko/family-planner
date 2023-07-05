import React from 'react';

import {StyledTooltip, StyledTextNote} from './styles';
import {WithChildren} from '../../types/helpers';
import {TooltipProps} from 'antd';

export const Tooltip: React.FC<{text?: string} & TooltipProps & WithChildren> = ({text, placement, ...props}) => {
  return <StyledTooltip placement={placement} title={<StyledTextNote>{text}</StyledTextNote>} {...props} />;
};
