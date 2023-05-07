import type {Dayjs} from 'dayjs';

import {ILoading} from './common';

export interface CalendarPropsT {
  value: Dayjs;
  onSelect: (newValue: Dayjs) => void;
  onPanelChange: (newValue: Dayjs) => void;
  selectedValue: Dayjs;
  getListData: (value: Dayjs) => any[];
  getMonthData: (value: Dayjs) => number | undefined;
  isLoading?: ILoading;
}

export interface ICalendarData {
  id: string;
  type?: string;
  content?: string;
}
