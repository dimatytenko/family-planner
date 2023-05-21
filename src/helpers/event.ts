import type {Dayjs} from 'dayjs';
import dayjs from 'dayjs';

import {ICalendarData} from '../types/calendar';
import {IEvent} from '../types/event';

export const getListData = (value: Dayjs, events: IEvent[]) => {
  const listData: ICalendarData[] = [];
  if (value && value < dayjs().subtract(1, 'day')) return [];

  events.forEach((event) => {
    if (
      !event.repeat &&
      value.date() === dayjs(event.date).date() &&
      value.month() === dayjs(event.date).month() &&
      value.year() === dayjs(event.date).year()
    ) {
      listData.push({id: event._id || '', type: 'success', content: event.event, description: event.description});
    }

    if (event.repeat === 'daily') {
      listData.push({id: event._id || '', type: 'default', content: event.event, description: event.description});
    }

    if (event.repeat === 'weekly' && value.day() === dayjs(event.date).day()) {
      listData.push({id: event._id || '', type: 'processing', content: event.event, description: event.description});
    }

    if (event.repeat === 'monthly' && value.date() === dayjs(event.date).date()) {
      listData.push({id: event._id || '', type: 'warning', content: event.event, description: event.description});
    }

    if (
      event.repeat === 'yearly' &&
      value.date() === dayjs(event.date).date() &&
      value.month() === dayjs(event.date).month()
    ) {
      listData.push({id: event._id || '', type: 'error', content: event.event, description: event.description});
    }
  });

  return listData || [];
};
