import {RefObject} from 'react';
import type {Dayjs} from 'dayjs';

import {ILoading} from './common';
import {IEvent} from '../types/event';

export interface CalendarPropsI {
  value: Dayjs;
  onSelect: (newValue: Dayjs) => void;
  onPanelChange: (newValue: Dayjs) => void;
  getListData: GetListDataT;
  getMonthData: (value: Dayjs) => number | undefined;
  isLoading?: ILoading;
  goToPicker: () => void;
  selectedValue: Dayjs;
  events: IEvent[];
  error?: string;
  dellId?: string;
  deleteEvent?: (id: string) => void;
}

export interface ICalendarData {
  id: string;
  type?: string;
  content?: string;
  description?: string;
}

export type GetListDataT = (value: Dayjs, events: IEvent[]) => ICalendarData[];

export interface EventListPropsI {
  currentList?: React.ReactNode;
  getListData: GetListDataT;
  selectedValue: Dayjs;
  events: IEvent[];
  deleteEvent?: (id: string) => void;
  error?: string;
  dellId?: string;
}

export interface MainEventListI extends EventListPropsI {
  isLoading?: ILoading;
  refEvent?: RefObject<HTMLDivElement>;
}
