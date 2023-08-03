import {useNavigate} from 'react-router-dom';
import {Skeleton} from 'antd';

import {Space} from '../../components/Space';
import {useSpace} from '../../hooks/space';
import {route} from '../../constants/routes';
import {HelmetComponent} from '../../components/Helmet';

export const SpaceContainer = () => {
  const navigate = useNavigate();
  const onRedirect = () => navigate(route.main.path);
  const {isLoading, formActions} = useSpace(onRedirect);
  const goBack = () => navigate(-1);

  if (isLoading?.page || !formActions.sizeForm) return <Skeleton active />;

  return (
    <>
      <HelmetComponent title={'space'} />
      <Space isLoading={isLoading} formActions={formActions} goBack={goBack} />;
    </>
  );
};
