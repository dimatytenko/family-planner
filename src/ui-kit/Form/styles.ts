import styled, {css} from 'styled-components';
import {Form, Input, Select, DatePicker, InputNumber, Switch} from 'antd';

import {mixins} from '../theme/mixins';
import {InputTextStyles} from '../Typography/styles';
import {scrollStyles} from '../theme/scroll';

const {Item} = Form;
const {TextArea, Password} = Input;

export const StyledFormItem = styled(Item)`
  .ant-form-item-explain-error {
    background-color: ${({theme}) => theme.palette.colors.alert};
    border-radius: ${({theme}) => theme.spacer._0};
    padding: 0 ${({theme}) => theme.spacer._2};
    margin-top: ${({theme}) => theme.spacer._0};
    color: ${({theme}) => theme.palette.colors.secondary};
    opacity: 0.8;
    ${mixins.font.tertiary.regular};
    font-size: 12px;
  }
  &.ant-form-item .ant-form-item-label > label {
    color: ${({theme}) => theme.palette.colors.primary};
    ${mixins.font.primary.regular};
  }
  & .ant-segmented-item-label {
    ${InputTextStyles}
  }
  .ant-radio-button-wrapper {
    ${InputTextStyles}
  }
  .ant-radio-button-wrapper:hover {
    color: ${({theme}) => theme.palette.colors.tertiary};
    border-color: ${({theme}) => theme.palette.colors.tertiary};
  }
  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    color: ${({theme}) => theme.palette.colors.primary};
    border-color: ${({theme}) => theme.palette.colors.tertiary};
    background-color: ${({theme}) => theme.palette.colors.tertiary};
  }
  .ant-segmented .ant-segmented-item-selected {
    background-color: ${({theme}) => theme.palette.colors.tertiary};
  }
`;

const inputStyle = css`
  font-size: 14px;
  line-height: 1.4;
  color: ${({theme}) => theme.palette.colors.primary};
  outline: none;
  padding: 5px 12px;
  box-sizing: border-box;
  border: 1.2px solid;
  border-color: ${({theme}) => theme.palette.colors.grayscale};
  border-radius: ${({theme}) => theme.spacer._1};
  &:hover,
  &:focus,
  &:active {
    border-color: ${({theme}) => theme.palette.colors.primary};
  }
  &.ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
    border-color: ${({theme}) => theme.palette.colors.primary};
  }
  &.ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled) {
    box-shadow: none;
  }
  &.ant-input[disabled] {
    background-color: ${({theme}) => theme.palette.colors.primary};
  }
  &.ant-input[disabled]:hover {
    border-color: ${({theme}) => theme.palette.colors.denary};
  }
  &.ant-input-affix-wrapper.ant-input-affix-wrapper-focused {
    border-color: ${({theme}) => theme.palette.colors.primary};
    box-shadow: none;
  }
  & .ant-input::placeholder {
    color: ${({theme}) => theme.palette.colors.grayscale};
  }
  &.ant-input-affix-wrapper > input.ant-input {
    ${InputTextStyles}
  }
  &.ant-input {
    ${InputTextStyles}
  }
  & .ant-input {
    ${InputTextStyles}
  }
`;

export const StyledInput = styled(Input)`
  ${inputStyle}
`;

export const StyledInputPassword = styled(Password)`
  ${inputStyle}
`;

export const StyledInputTextArea = styled(TextArea)<{$back?: string}>`
  ${inputStyle}
  ${scrollStyles}

  background-color: ${({$back, theme}) => ($back ? $back : theme.palette.colors.secondary)};
  padding: 0;
  border: none;

  & .ant-input:hover,
  & .ant-input:focus,
  & .ant-input:active {
    border-color: ${({theme}) => theme.palette.colors.primary};
    box-shadow: none;
  }
`;

export const StyledSelect = styled(Select)`
  &:hover {
    border-color: ${({theme}) => theme.palette.colors.primary};
  }
  & .ant-select-arrow {
    color: ${({theme}) => theme.palette.colors.primary};
  }
  & .ant-select-selection-placeholder {
    ${InputTextStyles}
    color: ${({theme}) => theme.palette.colors.grayscale};
  }
  .ant-select-selection-item {
    ${InputTextStyles};
  }
  svg {
    display: none;
  }
`;

export const DatePickerStyled = styled(DatePicker)`
  ${inputStyle};

  &.ant-picker .ant-picker-input > input::placeholder {
    ${InputTextStyles};
    color: ${({theme}) => theme.palette.colors.grayscale};
  }
  &.ant-picker .ant-picker-input > input {
    ${InputTextStyles};
  }
  .ant-select-selector {
    border-color: ${({theme}) => theme.palette.colors.primary} !important;
  }
`;

export const StyledInputNumber = styled(InputNumber)`
  ${inputStyle};

  svg {
    color: ${({theme}) => theme.palette.colors.primary};
  }
`;

export const StyledSwitch = styled(Switch)`
  background-color: ${({theme}) => theme.palette.colors.grayscale};

  &.ant-switch-checked {
    background-color: ${({theme}) => theme.palette.colors.tertiary};
  }
  &:hover:not(.ant-switch-disabled),
  &:focus:not(.ant-switch-disabled) {
    background: rgba(0, 0, 0, 0.45);
  }
  &.ant-switch-checked:hover:not(.ant-switch-disabled),
  &.ant-switch-checked:focus:not(.ant-switch-disabled) {
    background: rgba(0, 0, 0, 0.45);
  }
`;
