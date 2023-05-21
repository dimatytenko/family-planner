import {FormItemProps} from 'antd';
import {InputProps} from 'antd/lib/input/Input';
import {TextAreaProps} from 'antd/lib/input';
import {SelectProps, InternalSelectProps} from 'antd/lib/select';

export type InputPropsT = InputProps & {
  tooltip?: string;
};
export type FormItemPropsT = FormItemProps;

export type TextAreaPropsT = TextAreaProps;

export type SelectPropsT = SelectProps & InternalSelectProps;
