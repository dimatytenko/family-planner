import React from 'react';
import {useNavigate} from 'react-router-dom';

import {Task} from '../../components/Task';
import {useTask} from '../../hooks/task';
import {route} from '../../constants/routes';

export const EditTaskContainer = () => {
  const navigate = useNavigate();
  const onRedirect = () => navigate(route.main.path);
  const {isLoading, formActions, initialAssignee, initialValues} = useTask(onRedirect);
  const goBack = () => navigate(-1);

  return (
    <Task
      isLoading={isLoading}
      formActions={formActions}
      initialAssignee={initialAssignee}
      initialValues={initialValues}
      goBack={goBack}
    />
  );
};
