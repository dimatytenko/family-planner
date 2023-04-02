import type {Dayjs} from 'dayjs';

export type CalendarPropsT = {
  value: Dayjs;
  onSelect: (newValue: Dayjs) => void;
  onPanelChange: (newValue: Dayjs) => void;
  selectedValue: Dayjs;
  getListData: (value: Dayjs) => any[];
  getMonthData: (value: Dayjs) => number | undefined;
};
