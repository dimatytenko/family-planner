import styled from 'styled-components';
import {DatePicker} from 'antd';
import {DeleteOutlined} from '@ant-design/icons';

import {BackButton} from '../../ui-kit/Button';
import {InputTextStyles} from '../../ui-kit/Typography/styles';

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: ${({theme}) => theme.spacer._2};
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

export const BackButtonStyled = styled(BackButton)`
  margin-bottom: ${({theme}) => theme.spacer._3};
`;

export const DeleteIconWrapper = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DeleteIcon = styled(DeleteOutlined).attrs({})`
  color: ${({theme}) => theme.palette.colors.alert};
`;
