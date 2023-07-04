import dayjs from 'dayjs';

import {MainEventList} from '../../components/MainEventList';
import {useEventList} from '../../hooks/calendar';
import {getListData} from '../../helpers/event';

export const MainEventListContainer = () => {
  const {events, error, deleteEvent, dellId, isLoading} = useEventList();
  return (
    <MainEventList
      selectedValue={dayjs()}
      getListData={getListData}
      events={events}
      error={error}
      deleteEvent={deleteEvent}
      dellId={dellId}
      isLoading={isLoading}
    />
  );
};
