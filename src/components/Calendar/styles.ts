import styled from 'styled-components';
import {EditTwoTone, DeleteTwoTone} from '@ant-design/icons';
import {Link} from 'react-router-dom';

import {scrollStyles} from '../../ui-kit/theme/scroll';
import {Media} from '../../ui-kit/theme/breakpoints';

export const ButtonWrapper = styled.div`
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacer._1}px;
  ${scrollStyles}
`;

export const DisplayText = styled.span`
  ${Media.down.l} {
    display: none;
  }
`;

export const EventsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacer._2}px;
`;

export const EventsItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({theme}) => theme.spacer._3};
`;

export const EventEditLink = styled(Link)``;

export const EditIcon = styled(EditTwoTone)`
  font-size: 20px;
  margin-left: ${({theme}) => theme.spacer._3};
`;

export const DeleteIcon = styled(DeleteTwoTone).attrs({
  twoToneColor: '#eb2f96',
})`
  font-size: 20px;
  cursor: pointer;
`;
