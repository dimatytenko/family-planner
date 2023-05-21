import React from 'react';
import {QuestionCircleOutlined} from '@ant-design/icons';

import {StyledInput, StyledInputPassword, StyledInputTextArea, StyledSelect} from './styles';
import {InputPropsT, TextAreaPropsT, SelectPropsT} from './types';
import {Tooltip} from '../Tooltip';

export const Input: React.FC<InputPropsT> = ({tooltip, ...props}) => {
  return (
    <StyledInput
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

export const Select: React.FC<SelectPropsT> = ({...props}) => {
  // eslint-disable-next-line
  // @ts-ignore
  return <StyledSelect {...props} />;
};
