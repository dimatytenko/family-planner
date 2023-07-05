import {useNavigate} from 'react-router-dom';
import {Skeleton} from 'antd';

import {PickerComponent} from '../../components/Picker';
import {usePick} from '../../hooks/picker';
import {route} from '../../constants/routes';

export const PickerEdit = () => {
  const navigate = useNavigate();
  const redirect = () => navigate(route.calendar.path);
  const {isLoading, initialValues, formActions} = usePick(redirect);
  const goBack = () => navigate(-1);

  if (isLoading?.page || !formActions.sizeForm || !initialValues) return <Skeleton active />;

  return (
    <PickerComponent isLoading={isLoading} initialValues={initialValues} formActions={formActions} goBack={goBack} />
  );
};
