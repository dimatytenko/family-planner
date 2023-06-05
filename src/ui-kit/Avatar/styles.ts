import styled from 'styled-components';

export const AvatarButton = styled.div`
  width: fit-content;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid ${({theme}) => theme.palette.colors.secondary};
  transition: border-color ${({theme}) => theme.transition.primary};
  &:hover {
    border-color: ${({theme}) => theme.palette.colors.tertiary};
  }
`;
