import styled from 'styled-components';

import {BackButton, Button, GhostWrapper, LinkButton} from '../../ui-kit/Button';

export const BackButtonStyled = styled(BackButton)`
  margin-bottom: ${({theme}) => theme.spacer._3};
`;

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

export const SpacesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacer._2};
`;

export const WorkSpace = styled.div`
  max-width: 400px;
  min-height: 100px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: ${({theme}) => theme.spacer._1};
  padding: ${({theme}) => theme.spacer._3} ${({theme}) => theme.spacer._2};
`;

export const GhostWrapperStyled = styled(GhostWrapper)`
  display: inline;
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: ${({theme}) => theme.spacer._1};
  margin-bottom: ${({theme}) => theme.spacer._2};
`;

export const UsernamesInputWrapper = styled.div`
  margin-bottom: ${({theme}) => theme.spacer._6};
`;

export const LinkButtonStyled = styled(LinkButton)`
  max-width: 140px;
`;

export const HeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme}) => theme.spacer._2};
`;

export const TasksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacer._2};
`;

export const SpaceWrapper = styled.div``;
