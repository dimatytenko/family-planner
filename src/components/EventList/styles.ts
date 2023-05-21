import styled from 'styled-components';
import {EditTwoTone, DeleteTwoTone, InfoCircleOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';

import {Text2} from '../../ui-kit/Typography';
import {Media} from '../../ui-kit/theme/breakpoints';

export const EventTitle = styled(Text2)<{none?: boolean}>`
  display: inline-block;
  max-width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${Media.down.m} {
    display: ${({none}) => (none ? 'none' : 'inline-block')};
  }
`;

export const EventsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacer._2};
`;

export const EventsItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({theme}) => theme.spacer._3};
  padding: ${({theme}) => theme.spacer._0} ${({theme}) => theme.spacer._1};
  border-radius: ${({theme}) => theme.spacer._1};
  background-color: ${({theme}) => theme.palette.colors.secondary};
`;

export const EventEditLink = styled(Link)``;

export const EditIcon = styled(EditTwoTone)`
  font-size: 20px;
`;

export const DeleteIcon = styled(DeleteTwoTone).attrs({
  twoToneColor: '#eb2f96',
})`
  font-size: 20px;
  cursor: pointer;
`;

export const InfoIcon = styled(InfoCircleOutlined)`
  font-size: 20px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({theme}) => theme.spacer._2};
`;
