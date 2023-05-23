import styled from 'styled-components';
import {DeleteOutlined} from '@ant-design/icons';

import {BackButton} from '../../ui-kit/Button';

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: ${({theme}) => theme.spacer._2};
`;

export const BackButtonStyled = styled(BackButton)`
  margin-bottom: ${({theme}) => theme.spacer._3};
`;

export const DeleteIconWrapper = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DeleteIcon = styled(DeleteOutlined).attrs({})`
  color: ${({theme}) => theme.palette.colors.alert};
`;
