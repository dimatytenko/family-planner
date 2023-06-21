import React from 'react';
import {Link} from 'react-router-dom';
import {ButtonProps} from 'antd';

import {WithChildren} from '../../types/helpers';
import {
  StyledLink,
  StyledPlusCircleOutlined,
  StyledGhostWrapper,
  StyledLoadingOutlined,
  BackButtonWrapper,
  ArrowLeftIcon,
  BackText,
  StyledFloatButton,
  StyledButton,
} from './styles';
import {CustomButtonProps} from './types';

export const HomeLink: React.FC<WithChildren> = ({children, ...props}) => {
  return (
    <Link to={'/'} {...props}>
      {children}
    </Link>
  );
};

export const GhostWrapper: React.FC<CustomButtonProps & WithChildren> = ({
  children,
  onClick,
  loading,
  black,
  ...props
}) => {
  return (
    <StyledGhostWrapper onClick={onClick} black={black} {...props}>
      {loading ? <StyledLoadingOutlined /> : <>{children}</>}
    </StyledGhostWrapper>
  );
};

export const BackButton: React.FC<{onClick?: () => void}> = ({onClick, ...props}) => {
  return (
    <BackButtonWrapper onClick={onClick} {...props}>
      <ArrowLeftIcon />
      <BackText>Go back</BackText>
    </BackButtonWrapper>
  );
};

export const FloatButton: React.FC<{onClick?: () => void; text?: string}> = ({onClick, text, ...props}) => {
  return (
    <StyledFloatButton onClick={onClick} {...props}>
      <StyledPlusCircleOutlined />
      {text}
    </StyledFloatButton>
  );
};

export const LinkButton: React.FC<CustomButtonProps & ButtonProps & {to: string}> = ({
  to,
  children,
  disabled,
  ...props
}) => (
  <StyledLink {...props} to={disabled ? '#' : to}>
    <StyledButton {...props}>{children}</StyledButton>
  </StyledLink>
);

export const Button: React.FC<CustomButtonProps & ButtonProps & WithChildren> = ({
  children,
  onClick,
  htmlType,
  ...props
}) => {
  return (
    <StyledButton htmlType={htmlType} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};
