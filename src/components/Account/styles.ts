import styled from 'styled-components';
import {Upload} from 'antd';

import {Button} from '../../ui-kit/Button';
import {Text2Bold, Text4} from '../../ui-kit/Typography';

export const StyledButton = styled(Button)``;

export const UserInfoWrapper = styled.div`
  margin-top: ${({theme}) => theme.spacer._3};
`;

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

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({theme}) => theme.spacer._3};
`;

export const StyledUpload = styled(Upload)`
  width: auto !important;

  .ant-upload-list-item-container {
    margin-block: 0 !important;
    margin-inline: 0 !important;
  }
`;

export const Drawerlist = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacer._3};
`;

export const DrawerItemField = styled(Text4)``;

export const DrawerItemLabel = styled(Text2Bold)`
  text-transform: capitalize;
`;

export const FormWrapper = styled.div`
  max-width: 450px;
`;

export const TelegramLink = styled.a`
  display: block;
  margin: ${({theme}) => theme.spacer._2} 0;
  color: ${({theme}) => theme.palette.colors.blue};

  &:hover {
    text-decoration: underline;
  }
`;
