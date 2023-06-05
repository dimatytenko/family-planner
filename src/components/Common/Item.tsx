import React from 'react';
import {Badge, BadgeProps, Dropdown, Menu} from 'antd';
import {ItemType} from 'antd/es/menu/hooks/useItems';
import {MoreOutlined} from '@ant-design/icons';

import {
  ItemEditLink,
  ItemWrapper,
  EditIcon,
  DeleteIcon,
  InfoIcon,
  InfoWrapper,
  ItemTitle,
  ItemTaskTitle,
  ActionsWrapper,
  MenuAction,
  TaskLabel,
} from './styles';
import {route} from '../../constants/routes';
import {GhostWrapper} from '../../ui-kit/Button';
import {Tooltip} from '../../ui-kit/Tooltip';
import {Popconfirm} from '../../ui-kit/Popconfirm';
import {Avatar} from '../../ui-kit/Avatar';
import {TASK_STATUSES, statusTaskReqBody} from '../../queries/types/task';
import {ITEM_TYPES} from '../../types/common';

const text = (str: string) => `Are you sure to delete this ${str}?`;
const description = (str: string) => `Delete the ${str}`;

interface IItem {
  item: ITEM_TYPES;
  id: string;
  title?: string;
  type?: string;
  descr?: string;
  deleteItem?: (id: string) => void;
  dellId?: string;
  isOwner?: boolean;
  username?: string;
  avatar?: string;
  taskId?: string;
  status?: TASK_STATUSES;
  updateTaskStatus?: (id: string, body: statusTaskReqBody) => void;
}

export const Item: React.FC<IItem> = ({
  id,
  title,
  type,
  descr,
  deleteItem,
  dellId,
  item,
  isOwner,
  username,
  avatar,
  taskId,
  status,
  updateTaskStatus,
}) => {
  const editPath = item === ITEM_TYPES.SPACE ? route.spaceEdit.get({id: id}) : route.pickerEdit.get({id: id});
  const confirm = (id: string) => {
    deleteItem?.(id);
  };
  return (
    <ItemWrapper key={id} $status={status}>
      {status && <TaskLabel $status={status}>{status}</TaskLabel>}
      {descr ? (
        <Tooltip placement="bottomLeft" text={descr}>
          <GhostWrapper>
            <InfoWrapper>
              {type && <Badge status={type as BadgeProps['status']} />}
              <ItemTitle>{title}</ItemTitle>
              <InfoIcon />
            </InfoWrapper>
          </GhostWrapper>
        </Tooltip>
      ) : (
        <GhostWrapper>
          <InfoWrapper>
            {type && <Badge status={type as BadgeProps['status']} />}
            <ItemTaskTitle>{title}</ItemTaskTitle>
          </InfoWrapper>
        </GhostWrapper>
      )}
      <ActionsWrapper>
        {(isOwner || item === ITEM_TYPES.EVENT) && (
          <>
            <ItemEditLink
              to={item === ITEM_TYPES.TASK && taskId ? route.editTask.get({id: id, taskId: taskId}) : editPath}>
              <GhostWrapper>
                <EditIcon />
              </GhostWrapper>
            </ItemEditLink>

            <Popconfirm
              placement="bottomRight"
              title={text(item)}
              description={description(item)}
              onConfirm={() => confirm?.(taskId ? taskId : id)}>
              <GhostWrapper loading={dellId === id}>
                <DeleteIcon />
              </GhostWrapper>
            </Popconfirm>
          </>
        )}

        {avatar && username && (
          <Tooltip text={username}>
            <Avatar src={avatar} />
          </Tooltip>
        )}

        {item === ITEM_TYPES.TASK && <MenuMore id={taskId} updateTaskStatus={updateTaskStatus} />}
      </ActionsWrapper>
    </ItemWrapper>
  );
};

export type MenuMoreProps = {
  id?: string;
  updateTaskStatus?: (id: string, body: statusTaskReqBody) => void;
};

export const MenuMore: React.FC<MenuMoreProps> = ({id, updateTaskStatus}) => {
  const onUpdateStatus = (status: TASK_STATUSES) => {
    if (!id) return;
    updateTaskStatus?.(id, {status});
  };
  const ddActions: ItemType[] = [
    {
      key: 1,
      label: (
        <MenuAction $status={TASK_STATUSES.TODO} onClick={() => onUpdateStatus(TASK_STATUSES.TODO)}>
          {TASK_STATUSES.TODO}
        </MenuAction>
      ),
    },
    {
      key: 2,
      label: (
        <MenuAction $status={TASK_STATUSES.IN_PROGRESS} onClick={() => onUpdateStatus(TASK_STATUSES.IN_PROGRESS)}>
          {TASK_STATUSES.IN_PROGRESS}
        </MenuAction>
      ),
    },
    {
      key: 3,
      label: (
        <MenuAction $status={TASK_STATUSES.DONE} onClick={() => onUpdateStatus(TASK_STATUSES.DONE)}>
          {TASK_STATUSES.DONE}
        </MenuAction>
      ),
    },
  ];

  return (
    <Dropdown overlay={<Menu items={ddActions} />} trigger={['click']}>
      <GhostWrapper>
        <MoreOutlined />
      </GhostWrapper>
    </Dropdown>
  );
};
