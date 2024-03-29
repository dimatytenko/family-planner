import {FC} from 'react';
import {Badge, BadgeProps, Dropdown} from 'antd';
import type {MenuProps} from 'antd';
import {MoreOutlined} from '@ant-design/icons';
import {useTranslation} from 'react-i18next';

import {
  MainItemWrapper,
  ItemEditLink,
  ItemWrapper,
  EditIcon,
  DeleteIcon,
  InfoWrapper,
  ItemTitle,
  ItemTaskTitle,
  ActionsWrapper,
  MenuAction,
  TaskLabel,
  ItemDescription,
  ItemInfoWrapper,
} from './styles';
import {route} from '../../constants/routes';
import {GhostWrapper} from '../../ui-kit/Button';
import {Tooltip} from '../../ui-kit/Tooltip';
import {Popconfirm} from '../../ui-kit/Popconfirm';
import {Avatar} from '../../ui-kit/Avatar';
import {TASK_STATUSES, statusTaskReqBody, ITasksItem, itemStatusReqBody} from '../../queries/types/task';
import {ITEM_TYPES} from '../../types/common';
import {ItemTask} from './ItemTask';

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
  taskItems?: ITasksItem[];
  updateItemTaskStatus?: (id: string, body: itemStatusReqBody) => void;
  isAssignee?: boolean;
}

export const Item: FC<IItem> = ({
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
  taskItems,
  updateItemTaskStatus,
  isAssignee,
}) => {
  const {t} = useTranslation();

  const editPath = item === ITEM_TYPES.SPACE ? route.spaceEdit.get({id: id}) : route.pickerEdit.get({id: id});
  const confirm = (id: string) => {
    deleteItem?.(id);
  };

  return (
    <MainItemWrapper key={id} $status={status}>
      <ItemWrapper>
        {status && <TaskLabel $status={status}>{t(`common:buttons.${status}`)}</TaskLabel>}
        {descr ? (
          <ItemInfoWrapper>
            <InfoWrapper>
              {type && <Badge status={type as BadgeProps['status']} />}
              <ItemTitle>{title}</ItemTitle>
            </InfoWrapper>
            <ItemDescription>{descr}</ItemDescription>
          </ItemInfoWrapper>
        ) : (
          <InfoWrapper>
            {type && <Badge status={type as BadgeProps['status']} />}
            <ItemTaskTitle>{title}</ItemTaskTitle>
          </InfoWrapper>
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
                title={t('common:messages.deleteText', {
                  text: t(`common:titles.${item}`),
                })}
                description={t('common:messages.delete', {
                  text: t(`common:titles.${item}`),
                })}
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

          {item === ITEM_TYPES.TASK && isAssignee && <MenuMore id={taskId} updateTaskStatus={updateTaskStatus} />}
        </ActionsWrapper>
      </ItemWrapper>
      {!!taskItems?.length && (
        <ItemTask
          items={taskItems}
          taskId={taskId}
          updateItemTaskStatus={updateItemTaskStatus}
          isAssignee={isAssignee}
        />
      )}
    </MainItemWrapper>
  );
};

export type MenuMoreProps = {
  id?: string;
  updateTaskStatus?: (id: string, body: statusTaskReqBody) => void;
};

export const MenuMore: React.FC<MenuMoreProps> = ({id, updateTaskStatus}) => {
  const {t} = useTranslation();

  const onUpdateStatus = (status: TASK_STATUSES) => {
    if (!id) return;
    updateTaskStatus?.(id, {status});
  };
  const items: MenuProps['items'] = [
    {
      key: 1,
      label: (
        <MenuAction $status={TASK_STATUSES.TODO} onClick={() => onUpdateStatus(TASK_STATUSES.TODO)}>
          {t(`common:buttons.${TASK_STATUSES.TODO}`)}
        </MenuAction>
      ),
    },
    {
      key: 2,
      label: (
        <MenuAction $status={TASK_STATUSES.IN_PROGRESS} onClick={() => onUpdateStatus(TASK_STATUSES.IN_PROGRESS)}>
          {t(`common:buttons.${TASK_STATUSES.IN_PROGRESS}`)}
        </MenuAction>
      ),
    },
    {
      key: 3,
      label: (
        <MenuAction $status={TASK_STATUSES.DONE} onClick={() => onUpdateStatus(TASK_STATUSES.DONE)}>
          {t(`common:buttons.${TASK_STATUSES.DONE}`)}
        </MenuAction>
      ),
    },
  ];

  return (
    <Dropdown menu={{items}} trigger={['click']}>
      <GhostWrapper>
        <MoreOutlined />
      </GhostWrapper>
    </Dropdown>
  );
};
