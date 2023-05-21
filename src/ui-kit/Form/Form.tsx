import React from 'react';
import {FormItemProps} from 'antd';
import {StyledFormItem} from './styles';

export const FormItem: React.FC<FormItemProps> = ({...props}) => <StyledFormItem {...props} />;
