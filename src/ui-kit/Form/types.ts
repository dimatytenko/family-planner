import {ReactNode} from 'react';
import {FormItemProps, InputNumberProps, DatePickerProps} from 'antd';
import {InputProps} from 'antd/lib/input/Input';
import {TextAreaProps} from 'antd/lib/input';
import {SelectProps, InternalSelectProps} from 'antd/lib/select';
import {SwitchProps} from 'antd/lib/switch';

export type InputPropsT = InputProps & {
  tooltip?: string;
  icon?: ReactNode;
};
export type FormItemPropsT = FormItemProps;

export type TextAreaPropsT = TextAreaProps;

export type SelectPropsT = SelectProps & InternalSelectProps;

export type DatePickerPropsT = DatePickerProps;

export type InputNumberPropsT = InputNumberProps;

export type SwitchPropsT = SwitchProps;
