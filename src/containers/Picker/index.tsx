import {useNavigate} from 'react-router-dom';

import {PickerComponent} from '../../components/Picker';
import {usePick} from '../../hooks/picker';

export const Picker = () => {
  const navigate = useNavigate();
  const {isLoading, formActions} = usePick();
  const goBack = () => navigate(-1);

  return <PickerComponent isLoading={isLoading} formActions={formActions} goBack={goBack} />;
};
