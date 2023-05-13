import styled from 'styled-components';
import {DatePicker, Button} from 'antd';
import {ArrowLeftOutlined} from '@ant-design/icons';

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: ${({theme}) => theme.spacer._2};
`;

export const DatePickerStyled = styled(DatePicker)`
  & .ant-picker-panel-layout {
    width: 280px;
    overflow: auto;
  }
`;

export const BackButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${({theme}) => theme.spacer._1};
  margin-bottom: ${({theme}) => theme.spacer._5};
`;

export const ArrowLeftIcon = styled(ArrowLeftOutlined)`
  font-size: 14px;
`;

export const EventInputWrapper = styled.div`
  position: relative;
`;

export const EventButtonDel = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
`;
