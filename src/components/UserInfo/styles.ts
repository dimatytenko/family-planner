import styled from 'styled-components';

export const UserInfoWrapper = styled.div``;

export const UserInfolist = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacer._3};
`;

export const FormButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: ${({theme}) => theme.spacer._3};
`;
