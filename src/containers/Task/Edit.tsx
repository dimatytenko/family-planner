import {useNavigate} from 'react-router-dom';
import {Skeleton} from 'antd';

import {Task} from '../../components/Task';
import {useTask} from '../../hooks/task';
import {route} from '../../constants/routes';

export const EditTaskContainer = () => {
  const navigate = useNavigate();
  const onRedirect = () => navigate(route.main.path);
  const {isLoading, formActions, initialAssignee, initialValues} = useTask(onRedirect);
  const goBack = () => navigate(-1);

  if (isLoading?.page || !formActions.sizeForm || !initialValues) return <Skeleton active />;

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
