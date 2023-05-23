import React from 'react';

import {EventList} from '../EventList';
import {MainEventListI} from '../../types/calendar';
import {Title} from './styles';
import {EmptyComponent} from '../../ui-kit/Empty';
import {route} from '../../constants/routes';

export const MainEventList: React.FC<MainEventListI> = ({
  selectedValue,
  getListData,
  events,
  error,
  deleteEvent,
  dellId,
  isLoading,
}) => {
  if (isLoading?.page || !events) return null;

  return (
    <>
      <Title>Today`s events</Title>
      {!!events.length ? (
        <EventList
          selectedValue={selectedValue}
          getListData={getListData}
          events={events}
          error={error}
          deleteEvent={deleteEvent}
          dellId={dellId}
        />
      ) : (
        <EmptyComponent
          description={'You have no events for today!'}
          titleButton={'Add event'}
          to={route.picker.path}
        />
      )}
    </>
  );
};
