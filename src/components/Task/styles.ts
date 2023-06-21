import styled from 'styled-components';

import {Button, BackButton, GhostWrapper} from '../../ui-kit/Button';

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

export const GhostWrapperStyled = styled(GhostWrapper)`
  display: inline;
`;

export const ItemsInputWrapper = styled.div`
  margin-bottom: ${({theme}) => theme.spacer._6};
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: ${({theme}) => theme.spacer._1};
  margin-bottom: ${({theme}) => theme.spacer._0};
`;
