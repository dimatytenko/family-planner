import React from 'react';
import {QuestionCircleOutlined} from '@ant-design/icons';

import {StyledInput, StyledInputPassword, StyledInputTextArea} from './styles';
import {InputPropsT, TextAreaPropsT} from './types';
import {Tooltip} from '../Tooltip';

export const Input: React.FC<InputPropsT> = ({tooltip, icon, ...props}) => {
  return (
    <StyledInput
      prefix={icon}
      suffix={
        tooltip && (
          <Tooltip placement={'bottomRight'} text={tooltip}>
            <QuestionCircleOutlined />
          </Tooltip>
        )
      }
      {...props}
    />
  );
};

export const InputPassword: React.FC<InputPropsT> = ({...props}) => {
  return <StyledInputPassword {...props} />;
};

export const InputTextArea: React.FC<TextAreaPropsT> = ({...props}) => {
  return <StyledInputTextArea {...props} />;
};
