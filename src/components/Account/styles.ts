import styled from 'styled-components';
import {Upload} from 'antd';

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
