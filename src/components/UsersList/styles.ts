import styled from 'styled-components';

import {Text2, Text2Bold} from '../../ui-kit/Typography';

export const UserWrapper = styled.div`
  position: relative;
  display: flex;
  gap: ${({theme}) => theme.spacer._3};
  max-width: 400px;
  background-color: ${({theme}) => theme.palette.colors.lightGray};
  padding: ${({theme}) => theme.spacer._2};
  padding-right: ${({theme}) => theme.spacer._5};
  border: 1px solid ${({theme}) => theme.palette.colors.grayscale};
  border-radius: ${({theme}) => theme.spacer._1};
`;

export const UserList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacer._2};
`;

export const UserName = styled(Text2)`
  text-transform: capitalize;
`;

export const UserUserName = styled(Text2Bold)``;

export const UserContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacer._1};
`;

export const MoreButton = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;
