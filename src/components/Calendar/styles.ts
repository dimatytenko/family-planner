import styled from 'styled-components';
import {Calendar} from 'antd';

import {scrollStyles} from '../../ui-kit/theme/scroll';
import {Media} from '../../ui-kit/theme/breakpoints';
import {FloatButton} from '../../ui-kit/Button';

export const CallendarWrapper = styled.div`
  position: relative;
`;

export const ButtonWrapper = styled.div`
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacer._1};
  ${scrollStyles}
`;

export const DisplayText = styled.span`
  ${Media.down.l} {
    display: none;
  }
`;

export const FloatButtonCallendar = styled(FloatButton).attrs({})``;

export const EventListWrapper = styled.div`
  margin-bottom: ${({theme}) => theme.spacer._2};
`;

export const StyledCalendar = styled(Calendar)`
  &.ant-picker-calendar {
    background-color: transparent;
  }
  &.ant-picker-calendar.ant-picker-calendar-full .ant-picker-panel {
    background-color: #ffffff;
    opacity: 0.8;
    border-radius: ${({theme}) => theme.spacer._1};
  }
  &.ant-picker-calendar.ant-picker-calendar-full .ant-picker-calendar-date-today {
    border-color: ${({theme}) => theme.palette.colors.alert};
  }
  &.ant-picker-calendar.ant-picker-calendar-full
    .ant-picker-cell-in-view.ant-picker-cell-selected
    .ant-picker-calendar-date {
    background-color: ${({theme}) => theme.palette.colors.tertiary};
    border-radius: ${({theme}) => theme.spacer._1};
  }
  &.ant-picker-calendar.ant-picker-calendar-full
    .ant-picker-cell-selected
    .ant-picker-calendar-date
    .ant-picker-calendar-date-value {
    color: ${({theme}) => theme.palette.colors.alert};
  }
  & label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked.css-dev-only-do-not-override-j0nf2s {
    border-color: ${({theme}) => theme.palette.colors.tertiary};
    color: ${({theme}) => theme.palette.colors.tertiary};
  }
  & label.ant-radio-button-wrapper.css-dev-only-do-not-override-j0nf2s:hover {
    border-color: ${({theme}) => theme.palette.colors.tertiary};
    color: ${({theme}) => theme.palette.colors.tertiary};
  }
  &
    :where(.css-dev-only-do-not-override-j0nf2s).ant-select:not(.ant-select-customize-input)
    .ant-select-selector:hover {
    border-color: ${({theme}) => theme.palette.colors.tertiary} !important;
    color: ${({theme}) => theme.palette.colors.tertiary};
  }
`;
