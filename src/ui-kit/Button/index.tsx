import React, {ReactNode} from 'react';
import {Link} from 'react-router-dom';
import {ButtonProps} from 'antd';
import {useTranslation} from 'react-i18next';
import {isMobile} from 'react-device-detect';

import {WithChildren} from '../../types/helpers';
import {
  StyledLink,
  StyledGhostWrapper,
  StyledLoadingOutlined,
  BackButtonWrapper,
  ArrowLeftIcon,
  BackText,
  StyledFloatButton,
  StyledButton,
  StyledTextLink,
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
  disabled,
  ...props
}) => {
  return (
    <StyledGhostWrapper onClick={onClick} disabled={disabled} {...props}>
      {loading ? <StyledLoadingOutlined /> : <>{children}</>}
    </StyledGhostWrapper>
  );
};

export const BackButton: React.FC<{onClick?: () => void}> = ({onClick, ...props}) => {
  const {t} = useTranslation();

  return (
    <BackButtonWrapper onClick={onClick} {...props}>
      <ArrowLeftIcon />
      <BackText>{t('common:buttons.goBack')}</BackText>
    </BackButtonWrapper>
  );
};

export const FloatButton: React.FC<{onClick?: () => void; text?: string; icon?: ReactNode}> = ({
  onClick,
  text,
  icon,
  ...props
}) => {
  return (
    <StyledFloatButton onClick={onClick} {...props}>
      {icon && icon}
      {!isMobile && text}
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

export const TextLink: React.FC<WithChildren & {to: string}> = ({to, children}) => {
  return <StyledTextLink to={to}>{children}</StyledTextLink>;
};
