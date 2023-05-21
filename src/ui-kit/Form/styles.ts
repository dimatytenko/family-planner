import styled, {css} from 'styled-components';
import {Form, Input, Select} from 'antd';

import {mixins} from '../theme/mixins';
import {InputTextStyles} from '../Typography/styles';

const {Item} = Form;
const {TextArea, Password} = Input;

export const StyledFormItem = styled(Item)`
  .ant-form-item-explain-error {
    background-color: ${({theme}) => theme.palette.colors.grayscale};
    border-radius: ${({theme}) => theme.spacer._0};
    padding: 0 ${({theme}) => theme.spacer._2};
    margin-top: ${({theme}) => theme.spacer._0};
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
  border-color: ${({theme}) => theme.palette.colors.ghost};
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
`;

export const StyledSelect = styled(Select)`
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
`;
