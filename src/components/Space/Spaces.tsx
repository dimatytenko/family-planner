import {FC, useState, useEffect} from 'react';
import {Avatar as AvatarAntd, Dropdown} from 'antd';
import type {MenuProps} from 'antd';
import {useTranslation} from 'react-i18next';

import {Title} from '../../styles/common';
import {Label} from '../../ui-kit/Label';
import {ISpace, ISpacesProps} from '../../types/space';
import {Item} from '../Common';
import {
  SpacesWrapper,
  SpacesList,
  SpacesBody,
  SpaceHeader,
  LinkButtonStyled,
  HeadWrapper,
  TasksList,
  SpaceWrapper,
  ActionsWrapper,
  EmptyWrapper,
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

export const Spaces: FC<ISpacesProps> = ({
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
  refSpaces,
}) => {
  const [currentSpaces, setCurrentSpaces] = useState(spaces);
  const [filter, setFilter] = useState<TASK_STATUSES | 'all'>('all');
  const [taskId, setTaskId] = useState<string | null>(null);
  const {t} = useTranslation();
  const [currentSpace, setCurrentSpace] = useState<ISpace | null>(null);

  const onDelete = (id: string) => {
    resetError?.();
    deleteSpace?.(id);
  };
  const onDeleteTask = (id: string) => {
    resetError?.();
    deleteTask?.(id);
  };

  const onFilterTasks = (id: string | null, filter: TASK_STATUSES | 'all') => {
    if (filter === 'all' || !id) return setCurrentSpaces(spaces);
    setCurrentSpaces(
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

  const onDragStart = (e: React.DragEvent<HTMLDivElement>, space: ISpace) => {
    typeof e;

    setCurrentSpace(space);
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    // eslint-disable-next-line
    // @ts-ignore
    e.currentTarget.style.boxShadow = 'none';
  };

  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    // eslint-disable-next-line
    // @ts-ignore
    e.currentTarget.style.boxShadow = 'none';
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    // eslint-disable-next-line
    // @ts-ignore
    e.currentTarget.style.boxShadow = 'red 0px 0px 0px 3px';
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>, space: ISpace) => {
    e.preventDefault();

    if (!currentSpace) return;
    const updatedSpaces = currentSpaces?.map((c) => {
      if (c._id === space._id) {
        return {...c, order: currentSpace.order};
      }
      if (c._id === currentSpace._id) {
        return {...c, order: space.order};
      }
      return c;
    });
    setCurrentSpaces(updatedSpaces);
    const spacesOrder = updatedSpaces?.map((item: ISpace) => {
      return {order: item.order, id: item._id};
    });

    localStorage.setItem('spacesOrder', JSON.stringify(spacesOrder));
    e.currentTarget.style.boxShadow = 'none';
  };

  const sortSpaces = (a: ISpace, b: ISpace) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };

  if (isLoading?.page || !currentSpaces) return null;

  return (
    <SpacesWrapper>
      <Title>{t('common:titles.taskSpaces')}</Title>
      <SpacesBody>
        {!!currentSpaces?.length ? (
          <>
            <SpacesList>
              {currentSpaces?.sort(sortSpaces).map((space) => (
                <SpaceWrapper
                  key={space._id}
                  onDragStart={(e) => onDragStart(e, space)}
                  onDragLeave={(e) => onDragLeave(e)}
                  onDragEnd={(e) => onDragEnd(e)}
                  onDragOver={(e) => onDragOver(e)}
                  onDrop={(e) => onDrop(e, space)}
                  draggable={true}>
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
                        {t('common:buttons.addTask')}
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
                        isAssignee={task.assignee?._id === user?._id}
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
                </SpaceWrapper>
              ))}
            </SpacesList>
            <Br />
            {error && <Label variant="error" label={error} icon />}
          </>
        ) : (
          <EmptyWrapper ref={refSpaces}>
            <EmptyComponent
              description={t('common:messages.noTasks')}
              titleButton={t('common:buttons.addSpace')}
              to={route.createSpace.path}
            />
          </EmptyWrapper>
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
  const {t} = useTranslation();

  const handleChange = (filter: TASK_STATUSES | 'all') => {
    setTaskId(id);
    setFilter?.(filter);
  };

  const items: MenuProps['items'] = [
    {
      key: 1,
      label: (
        <MenuAction $status={TASK_STATUSES.TODO} onClick={() => handleChange(TASK_STATUSES.TODO)}>
          {t(`common:buttons.${TASK_STATUSES.TODO}`)}
        </MenuAction>
      ),
    },
    {
      key: 2,
      label: (
        <MenuAction $status={TASK_STATUSES.IN_PROGRESS} onClick={() => handleChange(TASK_STATUSES.IN_PROGRESS)}>
          {t(`common:buttons.${TASK_STATUSES.IN_PROGRESS}`)}
        </MenuAction>
      ),
    },
    {
      key: 3,
      label: (
        <MenuAction $status={TASK_STATUSES.DONE} onClick={() => handleChange(TASK_STATUSES.DONE)}>
          {t(`common:buttons.${TASK_STATUSES.DONE}`)}
        </MenuAction>
      ),
    },
    {
      key: 0,
      label: <MenuAction onClick={() => handleChange('all')}> {t('common:buttons.reset')}</MenuAction>,
    },
  ];

  return (
    <Dropdown menu={{items}} trigger={['click']}>
      <GhostWrapper>
        <StyledFilterIcon />
      </GhostWrapper>
    </Dropdown>
  );
};
