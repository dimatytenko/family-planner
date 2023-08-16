import styled, {css} from 'styled-components';
import {EditOutlined, DeleteOutlined, CheckCircleOutlined, StopOutlined, FilterOutlined} from '@ant-design/icons';

import {Link} from 'react-router-dom';

import {Text2, Text1, Text3} from '../../ui-kit/Typography';
import {Media} from '../../ui-kit/theme/breakpoints';
import {TASK_STATUSES} from '../../queries/types/task';
import {GhostWrapper} from '../../ui-kit/Button';

export const ItemTitle = styled(Text1)<{$isNone?: boolean}>`
  display: inline-block;
  max-width: 250px;

  ${Media.down.m} {
    display: ${({$isNone}) => ($isNone ? 'none' : 'inline-block')};
  }
`;

export const ItemTaskTitle = styled(Text2)``;

export const ItemDescription = styled(Text3)``;

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

export const MainItemWrapper = styled.div<{$status?: TASK_STATUSES}>`
  padding: ${({theme}) => theme.spacer._0} ${({theme}) => theme.spacer._1};
  border-radius: ${({theme}) => theme.spacer._1};
  ${({$status}) => statusStyles[$status || TASK_STATUSES.DEFAULT]};
`;

export const ItemWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({theme}) => theme.spacer._3};

  ${Media.down.m} {
    width: 100%;
  }
`;

export const ItemEditLink = styled(Link)``;

export const EditIcon = styled(EditOutlined)`
  font-size: 20px;
`;

export const DeleteIcon = styled(DeleteOutlined)`
  color: ${({theme}) => theme.palette.colors.alert};
  font-size: 20px;
  cursor: pointer;
`;

export const ItemInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({theme}) => theme.spacer._1};
`;

export const InfoWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme}) => theme.spacer._2};
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  align-self: flex-start;
  gap: ${({theme}) => theme.spacer._0};
`;

const actionsStatusStyles = {
  [TASK_STATUSES.DEFAULT]: css`
    color: ${({theme}) => theme.palette.colors.primary};
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

export const TaskItemsWrapper = styled.div<{$isHeight?: boolean}>`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: ${({$isHeight}) => ($isHeight ? '40px' : 'auto')};
  gap: ${({theme}) => theme.spacer._0};
  padding-left: ${({theme}) => theme.spacer._2};
  padding-top: ${({theme}) => theme.spacer._0};
  margin-top: ${({theme}) => theme.spacer._0};
  border-top: 1px solid ${({theme}) => theme.palette.colors.blue};
`;

export const FilterItemsWrapper = styled.div`
  position: absolute;
  top: ${({theme}) => theme.spacer._0};
  right: 0;
  width: fit-content;
  margin-left: auto;
`;

export const TaskItemWrapper = styled.div<{$isFirst?: boolean}>`
  display: flex;
  align-items: center;
  gap: ${({theme}) => theme.spacer._2};
  padding-right: ${({theme, $isFirst}) => ($isFirst ? theme.spacer._6 : 0)};
`;

export const StyledDoneItemIcon = styled(CheckCircleOutlined)`
  color: ${({theme}) => theme.palette.colors.blue};
`;

export const StyledTodoItemIcon = styled(StopOutlined)`
  color: ${({theme}) => theme.palette.colors.alert};
`;

export const StyledIconButton = styled(GhostWrapper)``;

export const StyledFilterIcon = styled(FilterOutlined)`
  font-size: 18px;
  color: ${({theme}) => theme.palette.colors.primary};
`;
