import {FC, RefObject} from 'react';
import dayjs from 'dayjs';

import {MainEventList} from '../../components/MainEventList';
import {useEventList} from '../../hooks/calendar';
import {getListData} from '../../helpers/event';

export const MainEventListContainer: FC<{refEvent: RefObject<HTMLDivElement>}> = ({refEvent}) => {
  const {events, error, deleteEvent, dellId, isLoading} = useEventList();
  return (
    <MainEventList
      refEvent={refEvent}
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
