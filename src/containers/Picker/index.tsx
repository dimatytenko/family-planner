import {useNavigate} from 'react-router-dom';
import {Skeleton} from 'antd';

import {PickerComponent} from '../../components/Picker';
import {usePick} from '../../hooks/picker';

export const Picker = () => {
  const navigate = useNavigate();
  const {isLoading, formActions} = usePick();
  const goBack = () => navigate(-1);

  if (isLoading?.page || !formActions.sizeForm) return <Skeleton active />;

  return <PickerComponent isLoading={isLoading} formActions={formActions} goBack={goBack} />;
};
