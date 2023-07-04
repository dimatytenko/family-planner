import {FC} from 'react';
import {Skeleton} from 'antd';

import {TaskForm} from './TaskForm';
import {BackButtonStyled} from './styles';
import {TaskPropsT} from '../../types/task';

export const Task: FC<TaskPropsT> = ({isLoading, initialValues, formActions, initialAssignee, goBack}) => {
  if (isLoading?.page || !formActions.sizeForm) return <Skeleton active />;

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
