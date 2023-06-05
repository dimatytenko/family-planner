import React from 'react';
import {Avatar as AvatarAntd} from 'antd';

import {Title} from '../../styles/common';
import {Label} from '../../ui-kit/Label';
import {ISpacesProps} from '../../types/space';
import {Item} from '../Common';
import {SpacesList, WorkSpace, LinkButtonStyled, HeadWrapper, TasksList, SpaceWrapper} from './styles';
import {EmptyComponent} from '../../ui-kit/Empty';
import {route} from '../../constants/routes';
import {Br} from '../../ui-kit/Br';
import {Avatar} from '../../ui-kit/Avatar';
import {Tooltip} from '../../ui-kit/Tooltip';
import {ITEM_TYPES} from '../../types/common';

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
}) => {
  if (isLoading?.page || !spaces) return null;

  const onDelete = (id: string) => {
    resetError?.();
    deleteSpace?.(id);
  };
  const onDeleteTask = (id: string) => {
    resetError?.();
    deleteTask?.(id);
  };
  console.log('spaces', spaces);

  return (
    <>
      <Title>Task spaces</Title>
      {!!spaces.length ? (
        <>
          <SpacesList>
            {spaces.map((space) => (
              <SpaceWrapper key={space._id}>
                <Item
                  id={space._id}
                  title={space.name}
                  descr={space.description}
                  deleteItem={onDelete}
                  dellId={dellId}
                  item={ITEM_TYPES.SPACE}
                  isOwner={space.user.id === user?._id}
                  avatar={space.user.avatar}
                  username={space.user.username}
                />
                <Br />
                <WorkSpace>
                  <HeadWrapper>
                    <AvatarAntd.Group>
                      {space.users.map((user) => (
                        <Tooltip key={user.id} text={user.username}>
                          <Avatar src={user.avatar} />
                        </Tooltip>
                      ))}
                    </AvatarAntd.Group>
                    <LinkButtonStyled variant="tertiary" to={route.createTask.get({id: space._id})}>
                      Add task
                    </LinkButtonStyled>
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
    </>
  );
};
