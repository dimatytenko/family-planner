import React from 'react';

import {Spaces} from '../../components/Space/Spaces';
import {useSpaceList} from '../../hooks/space';

export const SpacesContainer = () => {
  const {spaces, isLoading, error, resetError, dellId, deleteSpace, user, deleteTask, updateTaskStatus} =
    useSpaceList();

  return (
    <Spaces
      spaces={spaces}
      isLoading={isLoading}
      error={error}
      resetError={resetError}
      dellId={dellId}
      deleteSpace={deleteSpace}
      user={user}
      deleteTask={deleteTask}
      updateTaskStatus={updateTaskStatus}
    />
  );
};
