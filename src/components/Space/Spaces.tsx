import React, {useState, useEffect} from 'react';
import {Avatar as AvatarAntd, Dropdown} from 'antd';
import type {MenuProps} from 'antd';

import {Title} from '../../styles/common';
import {Label} from '../../ui-kit/Label';
import {ISpacesProps} from '../../types/space';
import {Item} from '../Common';
import {
  SpacesWrapper,
  SpacesList,
  SpacesBody,
  SpaceHeader,
  WorkSpace,
  LinkButtonStyled,
  HeadWrapper,
  TasksList,
  SpaceWrapper,
  ActionsWrapper,
} from './styles';
import {EmptyComponent} from '../../ui-kit/Empty';
import {route} from '../../constants/routes';
import {Br} from '../../ui-kit/Br';
import {Avatar} from '../../ui-kit/Avatar';
import {Tooltip} from '../../ui-kit/Tooltip';
import {ITEM_TYPES} from '../../types/common';
import {StyledFilterIcon, MenuAction} from '../Common/styles';
import {GhostWrapper} from '../../ui-kit/Button';
import {TASK_STATUSES} from '../../queries/types/task';

export const Spaces: React.FC<ISpacesProps> = ({
  spaces,
  isLoading,
  error,
  resetError,
  dellId,
  deleteSpace,
  user,
  deleteTask,
  updateTaskStatus,
  updateItemTaskStatus,
}) => {
  const [currentSpases, setCurrentSpases] = useState(spaces);
  const [filter, setFilter] = useState<TASK_STATUSES | 'all'>('all');
  const [taskId, setTaskId] = useState<string | null>(null);

  const onDelete = (id: string) => {
    resetError?.();
    deleteSpace?.(id);
  };
  const onDeleteTask = (id: string) => {
    resetError?.();
    deleteTask?.(id);
  };

  const onFilterTasks = (id: string | null, filter: TASK_STATUSES | 'all') => {
    if (filter === 'all' || !id) return setCurrentSpases(spaces);
    setCurrentSpases(
      spaces?.map((item) => {
        if (item._id !== id) return item;
        return {
          ...item,
          tasks: item.tasks.filter((task) => task.status === filter),
        };
      }),
    );
  };

  useEffect(() => {
    onFilterTasks(taskId, filter);
  }, [spaces, filter, taskId]);

  if (isLoading?.page || !currentSpases) return null;

  return (
    <SpacesWrapper>
      <Title>Task spaces</Title>
      <SpacesBody>
        {!!currentSpases?.length ? (
          <>
            <SpacesList>
              {currentSpases?.map((space) => (
                <SpaceWrapper key={space._id}>
                  <SpaceHeader>
                    <Item
                      id={space._id}
                      title={space.name}
                      descr={space.description}
                      deleteItem={onDelete}
                      dellId={dellId}
                      item={ITEM_TYPES.SPACE}
                      isOwner={space.user._id === user?._id}
                      avatar={space.user.avatar}
                      username={space.user.username}
                    />
                  </SpaceHeader>
                  <Br />
                  <WorkSpace>
                    <HeadWrapper>
                      <AvatarAntd.Group>
                        {space.users.map((user) => (
                          <Tooltip key={user._id} text={user.username}>
                            <Avatar src={user.avatar} />
                          </Tooltip>
                        ))}
                      </AvatarAntd.Group>
                      <ActionsWrapper>
                        <LinkButtonStyled variant="tertiary" to={route.createTask.get({id: space._id})}>
                          Add task
                        </LinkButtonStyled>
                        <MenuMore id={space._id} setFilter={setFilter} setTaskId={setTaskId} />
                      </ActionsWrapper>
                    </HeadWrapper>
                    <TasksList>
                      {space.tasks.map((task) => (
                        <Item
                          key={task._id}
                          id={space._id}
                          title={task.name}
                          deleteItem={onDeleteTask}
                          dellId={dellId}
                          item={ITEM_TYPES.TASK}
                          isOwner={task.user.id === user?._id}
                          avatar={task.assignee?.avatar}
                          username={task.assignee?.username}
                          taskId={task._id}
                          status={task.status}
                          updateTaskStatus={updateTaskStatus}
                          taskItems={task.items}
                          updateItemTaskStatus={updateItemTaskStatus}
                        />
                      ))}
                    </TasksList>
                  </WorkSpace>
                </SpaceWrapper>
              ))}
            </SpacesList>
            <Br />
            {error && <Label variant="error" label={error} icon />}
          </>
        ) : (
          <EmptyComponent
            description={'You have no task spaces!'}
            titleButton={'Add space'}
            to={route.createSpace.path}
          />
        )}
      </SpacesBody>
    </SpacesWrapper>
  );
};

export type MenuMoreProps = {
  id: string;
  setFilter: (filter: TASK_STATUSES | 'all') => void;
  setTaskId: (id: string | null) => void;
};

export const MenuMore: React.FC<MenuMoreProps> = ({id, setFilter, setTaskId}) => {
  const handleChange = (filter: TASK_STATUSES | 'all') => {
    setTaskId(id);
    setFilter?.(filter);
  };

  const items: MenuProps['items'] = [
    {
      key: 1,
      label: (
        <MenuAction $status={TASK_STATUSES.TODO} onClick={() => handleChange(TASK_STATUSES.TODO)}>
          {TASK_STATUSES.TODO}
        </MenuAction>
      ),
    },
    {
      key: 2,
      label: (
        <MenuAction $status={TASK_STATUSES.IN_PROGRESS} onClick={() => handleChange(TASK_STATUSES.IN_PROGRESS)}>
          {TASK_STATUSES.IN_PROGRESS}
        </MenuAction>
      ),
    },
    {
      key: 3,
      label: (
        <MenuAction $status={TASK_STATUSES.DONE} onClick={() => handleChange(TASK_STATUSES.DONE)}>
          {TASK_STATUSES.DONE}
        </MenuAction>
      ),
    },
    {
      key: 0,
      label: <MenuAction onClick={() => handleChange('all')}>reset</MenuAction>,
    },
  ];

  return (
    <Dropdown menu={{items}} trigger={['click']}>
      <GhostWrapper black>
        <StyledFilterIcon />
      </GhostWrapper>
    </Dropdown>
  );
};
