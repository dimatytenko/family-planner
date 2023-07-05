import {FC} from 'react';

import {TaskForm} from './TaskForm';
import {BackButtonStyled} from './styles';
import {TaskPropsT} from '../../types/task';

export const Task: FC<TaskPropsT> = ({isLoading, initialValues, formActions, initialAssignee, goBack}) => {
  return (
    <>
      <BackButtonStyled onClick={goBack} />
      <TaskForm
        isLoading={isLoading}
        initialValues={initialValues}
        formActions={formActions}
        initialAssignee={initialAssignee}
      />
    </>
  );
};
