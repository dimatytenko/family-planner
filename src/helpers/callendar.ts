import {RangePickerProps} from 'antd/es/date-picker';
import dayjs from 'dayjs';

export const disabledDate: RangePickerProps['disabledDate'] = (current) => {
  return current && current < dayjs().subtract(1, 'day');
};

const range = (start: number, end: number) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};

export const disabledDateTime = (current: any) => {
  if (current && current < dayjs().endOf('day') && current?.hour() === new Date().getHours()) {
    return {
      disabledHours: () => range(0, new Date().getHours()),
      disabledMinutes: () => range(0, new Date().getMinutes()),
      disabledSeconds: () => range(0, new Date().getSeconds()),
    };
  }
  if (current && current < dayjs().endOf('day')) {
    return {
      disabledHours: () => range(0, new Date().getHours()),
    };
  }
  return {
    disabledHours: () => range(0, 0),
    disabledMinutes: () => range(0, 0),
    disabledSeconds: () => range(0, 0),
  };
};
