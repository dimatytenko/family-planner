import {useNavigate} from 'react-router-dom';

import {Space} from '../../components/Space';
import {useSpace} from '../../hooks/space';
import {route} from '../../constants/routes';

export const SpaceContainer = () => {
  const navigate = useNavigate();
  const onRedirect = () => navigate(route.main.path);
  const {isLoading, formActions} = useSpace(onRedirect);
  const goBack = () => navigate(-1);

  return <Space isLoading={isLoading} formActions={formActions} goBack={goBack} />;
};
