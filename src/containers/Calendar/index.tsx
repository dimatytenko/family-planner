import React from 'react';
import {useNavigate} from 'react-router-dom';

import {CalendarComponent} from '../../components/Calendar';
import {useCalendarData} from '../../hooks/calendar';
import {route} from '../../constants/routes';
import {getListData} from '../../helpers/event';

const Calendar: React.FC = () => {
  const navigate = useNavigate();
  const {value, onSelect, onPanelChange, getMonthData, isLoading, selectedValue, deleteEvent, events, error, dellId} =
    useCalendarData();
  const goToPicker = () => {
    navigate(route.picker.path);
  };
  return (
    <CalendarComponent
      value={value}
      onSelect={onSelect}
      onPanelChange={onPanelChange}
      getListData={getListData}
      getMonthData={getMonthData}
      isLoading={isLoading}
      goToPicker={goToPicker}
      selectedValue={selectedValue}
      events={events}
      error={error}
      dellId={dellId}
      deleteEvent={deleteEvent}
    />
  );
};

export default Calendar;
