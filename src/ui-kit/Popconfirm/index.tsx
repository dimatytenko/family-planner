import React from 'react';

import {StyledPopconfirm} from './styles';
import {WithChildren} from '../../types/helpers';
import {PopconfirmProps} from 'antd';

export const Popconfirm: React.FC<PopconfirmProps & WithChildren> = ({
  placement,
  title,
  description,
  onConfirm,
  ...props
}) => {
  return (
    <StyledPopconfirm
      title={title}
      description={description}
      onConfirm={onConfirm}
      placement={placement}
      okText="Yes"
      cancelText="Cancel"
      {...props}
    />
  );
};
