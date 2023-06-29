import styled, {css, StyledProps} from 'styled-components';
import {StyledSvgIconProps} from './types';

const getColor = ({theme, color, defaultColor}: {theme: any; color?: string; defaultColor: string}) => {
  switch (color) {
    case 'primary':
      return theme.palette.colors.primary;
    case 'secondary':
      return theme.palette.colors.secondary;
    case 'ghost':
      return theme.palette.colors.ghost;
    case 'none':
      return 'none';
    default:
      return defaultColor;
  }
};

const stroke = ({theme, stroke}: StyledProps<StyledSvgIconProps>) => {
  return getColor({theme, color: stroke, defaultColor: theme.palette.colors.primary});
};

export const fill = ({theme, fill}: StyledProps<StyledSvgIconProps>) => {
  return getColor({theme, color: fill, defaultColor: theme.palette.colors.primary});
};

export const StyledSvg = styled.svg`
  & > * {
    stroke: ${stroke};
  }
  & > path {
    ${({strokeWidth}) =>
      strokeWidth &&
      css`
        stroke-width: ${strokeWidth};
      `};
  }
  fill: ${fill};
`;

export const StyledPath = styled.path`
  fill: ${fill};
  stroke: ${stroke};
`;
