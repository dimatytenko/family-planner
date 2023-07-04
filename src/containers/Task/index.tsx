import {useNavigate} from 'react-router-dom';

import {Task} from '../../components/Task';
import {useTask} from '../../hooks/task';
import {route} from '../../constants/routes';

export const TaskContainer = () => {
  const navigate = useNavigate();
  const onRedirect = () => navigate(route.main.path);
  const {isLoading, formActions, initialAssignee} = useTask(onRedirect);
  const goBack = () => navigate(-1);

  return <Task isLoading={isLoading} formActions={formActions} initialAssignee={initialAssignee} goBack={goBack} />;
};
