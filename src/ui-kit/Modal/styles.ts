import styled from 'styled-components';
import {Modal} from 'antd';

export const StyledModal = styled(Modal)`
  & .ant-modal-content {
    background-color: ${({theme}) => theme.palette.colors.lightGray};
    border: 1px solid ${({theme}) => theme.palette.colors.denary};
    padding: ${({theme}) => theme.spacer._8};
  }
`;
