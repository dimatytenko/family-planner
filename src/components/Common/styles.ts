import styled, {css} from 'styled-components';
import {EditFilled, DeleteFilled, InfoCircleOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';

import {Text2} from '../../ui-kit/Typography';
import {Media} from '../../ui-kit/theme/breakpoints';
import {TASK_STATUSES} from '../../queries/types/task';

export const ItemTitle = styled(Text2)<{none?: boolean}>`
  display: inline-block;
  max-width: 250px;

  ${Media.down.m} {
    display: ${({none}) => (none ? 'none' : 'inline-block')};
  }
`;

export const ItemTaskTitle = styled(Text2)<{none?: boolean}>``;

const statusStyles = {
  [TASK_STATUSES.DEFAULT]: css`
    background-color: ${({theme}) => theme.palette.colors.secondary};
  `,
  [TASK_STATUSES.TODO]: css`
    background-color: ${({theme}) => theme.palette.colors.grayscale};
  `,
  [TASK_STATUSES.IN_PROGRESS]: css`
    background-color: ${({theme}) => theme.palette.colors.doing};
  `,
  [TASK_STATUSES.DONE]: css`
    background-color: ${({theme}) => theme.palette.colors.success};
  `,
};

export const ItemWrapper = styled.div<{$status?: TASK_STATUSES}>`
  position: relative;
  display: flex;
  align-items: flex-start;
  max-width: 400px;
  gap: ${({theme}) => theme.spacer._3};
  padding: ${({theme}) => theme.spacer._0} ${({theme}) => theme.spacer._1};
  border-radius: ${({theme}) => theme.spacer._1};
  ${({$status}) => statusStyles[$status || TASK_STATUSES.DEFAULT]};
`;

export const ItemEditLink = styled(Link)``;

export const EditIcon = styled(EditFilled)`
  font-size: 20px;
`;

export const DeleteIcon = styled(DeleteFilled)`
  color: ${({theme}) => theme.palette.colors.alert};
  font-size: 20px;
  cursor: pointer;
`;

export const InfoIcon = styled(InfoCircleOutlined)`
  font-size: 20px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme}) => theme.spacer._2};
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: ${({theme}) => theme.spacer._0};
`;

const actionsStatusStyles = {
  [TASK_STATUSES.DEFAULT]: css`
    color: ${({theme}) => theme.palette.colors.secondary};
  `,
  [TASK_STATUSES.TODO]: css`
    color: ${({theme}) => theme.palette.colors.grayscale};
  `,
  [TASK_STATUSES.IN_PROGRESS]: css`
    color: ${({theme}) => theme.palette.colors.doing};
  `,
  [TASK_STATUSES.DONE]: css`
    color: ${({theme}) => theme.palette.colors.success};
  `,
};

export const MenuAction = styled.div<{$status?: TASK_STATUSES}>`
  ${({$status}) => actionsStatusStyles[$status || TASK_STATUSES.DEFAULT]};
`;

export const TaskLabel = styled.div<{$status?: TASK_STATUSES}>`
  position: absolute;
  top: 0;
  left: ${({theme}) => theme.spacer._2};
  transform: translateY(-50%);
  padding: 0 ${({theme}) => theme.spacer._1};
  background-color: ${({theme}) => theme.palette.colors.secondary};
  ${({$status}) => statusStyles[$status || TASK_STATUSES.DEFAULT]};
  border-radius: ${({theme}) => theme.spacer._1};
`;
