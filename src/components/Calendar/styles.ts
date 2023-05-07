import styled from 'styled-components';

import {scrollStyles} from '../../ui-kit/theme/scroll';

export const ButtonWrapper = styled.div`
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacer._1}px;
  ${scrollStyles}
`;
