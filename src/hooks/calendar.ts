import {useState} from 'react';
import dayjs from 'dayjs';
import type {Dayjs} from 'dayjs';

const getListData = (value: Dayjs) => {
  let listData;
  if (value.date() === 8 && value.month() === 1) {
    listData = [
      {type: 'warning', content: 'This is warning event.'},
      {type: 'success', content: 'This is usual event.'},
      {type: 'error', content: 'This is error event.'},
    ];
  }
  return listData || [];
};

const getMonthData = (value: Dayjs) => {
  if (value.month() === 8) {
    return 1394;
  }
};

export const useCalendarData = () => {
  const [value, setValue] = useState(() => dayjs());
  const [selectedValue, setSelectedValue] = useState(() => dayjs());

  const onSelect = (newValue: Dayjs) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };

  const onPanelChange = (newValue: Dayjs) => {
    setValue(newValue);
  };

  return {value, selectedValue, onSelect, getListData, getMonthData, onPanelChange};
};
