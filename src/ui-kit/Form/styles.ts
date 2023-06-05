import styled, {css} from 'styled-components';
import {Form, Input, Select, DatePicker, InputNumber} from 'antd';

import {mixins} from '../theme/mixins';
import {InputTextStyles} from '../Typography/styles';

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
  &:where(.css-dev-only-do-not-override-j0nf2s).ant-form-item .ant-form-item-label > label {
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
  & :where(.css-dev-only-do-not-override-j0nf2s).ant-input::placeholder {
    color: ${({theme}) => theme.palette.colors.grayscale};
  }
  &:where(.css-dev-only-do-not-override-j0nf2s).ant-input-affix-wrapper > input.ant-input {
    ${InputTextStyles}
  }
  &:where(.css-dev-only-do-not-override-j0nf2s).ant-input {
    ${InputTextStyles}
  }
  & :where(.css-dev-only-do-not-override-j0nf2s).ant-input {
    ${InputTextStyles}
  }
`;

export const StyledInput = styled(Input)`
  ${inputStyle}
`;

export const StyledInputPassword = styled(Password)`
  ${inputStyle}
`;

export const StyledInputTextArea = styled(TextArea)`
  ${inputStyle}
  padding: 0;
  border: none;

  & :where(.css-dev-only-do-not-override-j0nf2s).ant-input:hover,
  & :where(.css-dev-only-do-not-override-j0nf2s).ant-input:focus,
  & :where(.css-dev-only-do-not-override-j0nf2s).ant-input:active {
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
  :where(.css-dev-only-do-not-override-j0nf2s).ant-select:not(.ant-select-disabled):not(
      .ant-select-customize-input
    ):not(.ant-pagination-size-changer):hover
    .ant-select-selector {
    border-color: ${({theme}) => theme.palette.colors.primary};
  }
  :where(.css-dev-only-do-not-override-j0nf2s).ant-select-focused:not(.ant-select-disabled).ant-select:not(
      .ant-select-customize-input
    ):not(.ant-pagination-size-changer)
    .ant-select-selector {
    border-color: ${({theme}) => theme.palette.colors.primary};
    box-shadow: none;
  }
    svg {
      display: none;
    }
  }
`;

export const DatePickerStyled = styled(DatePicker)`
  & .ant-picker-panel-layout {
    width: 280px;
    overflow: auto;
  }
  &:where(.css-dev-only-do-not-override-j0nf2s).ant-picker-focused {
    border-color: ${({theme}) => theme.palette.colors.primary};
  }
  &:where(.css-dev-only-do-not-override-j0nf2s).ant-picker .ant-picker-input > input::placeholder {
    ${InputTextStyles};
    color: ${({theme}) => theme.palette.colors.grayscale};
  }
  &:where(.css-dev-only-do-not-override-j0nf2s).ant-picker .ant-picker-input > input {
    ${InputTextStyles};
  }
  &:where(.css-dev-only-do-not-override-j0nf2s).ant-picker-dropdown .ant-picker-header-view button:hover {
    color: ${({theme}) => theme.palette.colors.primary};
  }
  &.ant-select-selector {
    border-color: ${({theme}) => theme.palette.colors.primary} !important;
  }
`;

export const StyledInputNumber = styled(InputNumber)`
  ${inputStyle};

  svg {
    color: ${({theme}) => theme.palette.colors.primary};
  }
`;
