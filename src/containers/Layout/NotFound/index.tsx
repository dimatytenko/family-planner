import {useNavigate} from 'react-router-dom';

import {NotFound} from '../../../components/AppLayout/NotFound';

const NotFoundContainer = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return <NotFound goBack={goBack} />;
};

export default NotFoundContainer;
