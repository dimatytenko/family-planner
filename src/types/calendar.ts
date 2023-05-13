import type {Dayjs} from 'dayjs';

import {ILoading} from './common';

export interface CalendarPropsT {
  value: Dayjs;
  onSelect: (newValue: Dayjs) => void;
  onPanelChange: (newValue: Dayjs) => void;
  selectedValue: Dayjs;
  getListData: (value: Dayjs) => ICalendarData[];
  getMonthData: (value: Dayjs) => number | undefined;
  isLoading?: ILoading;
  deleteEvent?: (id: string) => void;
  error?: string;
  dellId?: string;
}

export interface ICalendarData {
  id: string;
  type?: string;
  content?: string;
}
