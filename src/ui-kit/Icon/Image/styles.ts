import styled from 'styled-components';
import {StyledIconProps} from './types';

const width = (props: StyledIconProps) => {
  return props.width ? props.width : '25px';
};

const height = (props: StyledIconProps) => {
  return props.height ? props.height : '25px';
};

export const Icon = styled.img`
  width: ${width};
  height: ${height};
  object-fit: contain;
  object-position: center;
  overflow: hidden;
`;
