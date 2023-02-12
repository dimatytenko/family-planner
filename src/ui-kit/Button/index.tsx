import React from 'react';
import {Link} from 'react-router-dom';
import {ButtonProps} from 'antd';

import {WithChildren} from '../../types/helpers';
import {StyledLink, StyledLinkButton} from './styles';

export const HomeLink: React.FC<WithChildren> = ({children, ...props}) => {
  return (
    <Link to={'/'} {...props}>
      {children}
    </Link>
  );
};

export const LinkButton: React.FC<ButtonProps & {to: string}> = ({to, children, disabled, ...props}) => (
  <StyledLink {...props} to={disabled ? '#' : to}>
    <StyledLinkButton {...props}>{children}</StyledLinkButton>
  </StyledLink>
);
