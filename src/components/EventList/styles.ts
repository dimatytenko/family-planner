import styled from 'styled-components';

export const EventsList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacer._2};
`;
