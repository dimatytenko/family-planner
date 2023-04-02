import React from 'react';

import {CalendarComponent} from '../../components/Calendar';
import {useCalendarData} from '../../hooks/calendar';

export const Calendar: React.FC = () => {
  const {value, onSelect, onPanelChange, selectedValue, getListData, getMonthData} = useCalendarData();
  return (
    <CalendarComponent
      value={value}
      onSelect={onSelect}
      onPanelChange={onPanelChange}
      selectedValue={selectedValue}
      getListData={getListData}
      getMonthData={getMonthData}
    />
  );
};
