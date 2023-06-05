import styled from 'styled-components';

import {Button, BackButton} from '../../ui-kit/Button';

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: ${({theme}) => theme.spacer._2};

  & > * {
    flex: 1;
  }
`;

export const StyledButton = styled(Button)`
  max-width: 200px;
`;

export const BackButtonStyled = styled(BackButton)`
  margin-bottom: ${({theme}) => theme.spacer._3};
`;
