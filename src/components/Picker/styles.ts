import styled from 'styled-components';
import {DeleteOutlined} from '@ant-design/icons';

import {BackButton, Button} from '../../ui-kit/Button';

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: ${({theme}) => theme.spacer._2};

  & > * {
    flex: 1;
  }
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

export const StyledButton = styled(Button)`
  max-width: 200px;
`;

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
