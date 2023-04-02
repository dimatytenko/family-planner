import styled, {css} from 'styled-components';

import {ReactComponent as Logo} from './assets/planner.svg';

const logoStyles = css`
  display: block;
  width: 30px;
  height: 30px;
`;

export const StyledLogo = styled(Logo)`
  ${logoStyles}
`;
