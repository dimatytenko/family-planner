import styled, {css} from 'styled-components';

import {StyledLabelPropsT} from './types';
import {TextSmall} from '../Typography/styles';

const labelPrimaryStyles = css`
  background-color: ${({theme}) => theme.palette.colors.primary};
`;

const labelTertiaryStyles = css`
  background-color: ${({theme}) => theme.palette.colors.tertiary};
`;

const labelErrorStyles = css`
  background-color: ${({theme}) => theme.palette.colors.alert};
`;

export const StyledLabel = styled(TextSmall)<StyledLabelPropsT>`
  ${({variant}) => {
    switch (variant) {
      case 'primary':
        return labelPrimaryStyles;
      case 'tertiary':
        return labelTertiaryStyles;
      case 'error':
        return labelErrorStyles;
      default:
        return labelPrimaryStyles;
    }
  }};
  width: 100%;
  display: inline-flex;
  align-items: center;
  gap: ${({theme}) => theme.spacer._1};
  padding: ${({theme}) => theme.spacer._0} ${({theme}) => theme.spacer._1}};
  border-radius: ${({theme}) => theme.spacer._0};
  color: ${({theme}) => theme.palette.colors.secondary};
`;

export const StyledLabelIcon = styled.span``;
