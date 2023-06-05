import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';
import {Button} from 'antd';
import {PlusCircleOutlined, LoadingOutlined, ArrowLeftOutlined} from '@ant-design/icons';

import {CustomButtonProps} from './types';
import {Text1Bold} from '../../ui-kit/Typography';
import {mixins} from '../../ui-kit/theme/mixins';

export const StyledLink = styled(Link)``;

// export const StyledLinkButton = styled(Button)``;

export const StyledPlusCircleOutlined = styled(PlusCircleOutlined)``;

const borderRadius = (props: CustomButtonProps) => {
  return props.round ? '50%' : props.theme.spacer._0;
};

const styles = css`
  cursor: pointer;
  border-radius: ${borderRadius};
  padding: ${({theme}) => theme.spacer._1} ${({theme}) => theme.spacer._0};
  transition: background-color ${({theme}) => theme.transition.primary};

  &:hover {
    background-color: ${({theme}) => theme.palette.colors.lightGray};
  }
  svg {
    transition: transform ${({theme}) => theme.transition.primary};

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const StyledGhostWrapper = styled.div`
  ${styles}
`;

export const StyledLoadingOutlined = styled(LoadingOutlined)``;

export const BackButtonWrapper = styled.div`
  width: fit-content;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${({theme}) => theme.spacer._1};
  margin-left: ${({theme}) => theme.spacer._1};
  transition: transform ${({theme}) => theme.transition.primary};

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const ArrowLeftIcon = styled(ArrowLeftOutlined)`
  font-size: 14px;
`;

export const BackText = styled(Text1Bold)``;

export const StyledFloatButton = styled.div`
  position: fixed;
  bottom: ${({theme}) => theme.spacer._4};
  right: ${({theme}) => theme.spacer._6};
  z-index: 100;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme}) => theme.spacer._1};
  padding: ${({theme}) => theme.spacer._1} ${({theme}) => theme.spacer._2};
  border-radius: ${({theme}) => theme.spacer._2};
  background-color: ${({theme}) => theme.palette.colors.primary};
  color: white;
  cursor: pointer;
  opacity: 0.8;

  &:hover,
  &:focus {
    transform: scale(1.1);
    opacity: 1;
  }
`;

// Button
const borderColor = (props: CustomButtonProps) => {
  switch (props.variant) {
    case 'secondary':
      return props.theme.palette.colors.alert;

    default:
      return props.theme.palette.colors.primary;
  }
};
const borderColorHover = (props: CustomButtonProps) => {
  switch (props.variant) {
    case 'secondary':
      return props.theme.palette.colors.alert;
    case 'success':
      return props.theme.palette.colors.success;
    case 'tertiary':
      return props.theme.palette.colors.tertiary;
    default:
      return props.theme.palette.colors.alert;
  }
};

const color = (props: CustomButtonProps) => {
  switch (props.variant) {
    case 'secondary':
      return props.theme.palette.colors.alert;
    default:
      return props.theme.palette.colors.secondary;
  }
};
const colorHover = (props: CustomButtonProps) => {
  switch (props.variant) {
    case 'secondary':
      return props.theme.palette.colors.primary;
    case 'success':
      return props.theme.palette.colors.success;
    case 'tertiary':
      return props.theme.palette.colors.tertiary;
    default:
      return props.theme.palette.colors.alert;
  }
};

const backgroundColor = (props: CustomButtonProps) => {
  switch (props.variant) {
    case 'secondary':
      return props.theme.palette.colors.ghost;

    default:
      return props.theme.palette.colors.primary;
  }
};
const backgroundColorHover = (props: CustomButtonProps) => {
  switch (props.variant) {
    case 'secondary':
      return props.theme.palette.colors.alert;
    default:
      return props.theme.palette.colors.primary;
  }
};

const stylesButton = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme}) => theme.spacer._2} ${({theme}) => theme.spacer._4};
  border-radius: ${({theme}) => theme.spacer._2};
  border: 1.2px solid;
  ${mixins.font.secondary.bold};
  border-color: ${borderColor};
  color: ${color};
  background-color: ${backgroundColor};
  opacity: 0.8;

  &:hover,
  &:focus {
    opacity: 1;
    color: ${colorHover} !important;
    border-color: ${borderColorHover} !important;
    background-color: ${backgroundColorHover} !important;
  }
`;

export const StyledButton = styled(Button)`
  ${stylesButton}
`;
