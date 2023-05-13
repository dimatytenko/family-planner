import {useState, useEffect} from 'react';
import dayjs from 'dayjs';
import type {Dayjs} from 'dayjs';

import {getAllEventsQuery, deleteEventQuery} from '../queries/event';
import {IEvent} from '../types/event';
import {ICalendarData} from '../types/calendar';
import {info, loading, errorMessage} from '../helpers/common';

const getMonthData = (value: Dayjs) => {
  if (value.month() === 8) {
    return 1394;
  }
};

export const useCalendarData = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [value, setValue] = useState(() => dayjs());
  const [selectedValue, setSelectedValue] = useState(() => dayjs());
  const [isLoading, setIsLoading] = useState(loading);
  const [dellId, setDellId] = useState('');
  const [error, setError] = useState('');

  const onSelect = (newValue: Dayjs) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };

  const onPanelChange = (newValue: Dayjs) => {
    setValue(newValue);
  };

  const getEvents = async () => {
    try {
      setIsLoading((prev) => ({...prev, page: true}));
      const res = await getAllEventsQuery();
      if (res) {
        setEvents(res.body.data);
        setIsLoading((prev) => ({...prev, page: false}));
      }
    } catch (error) {
      setIsLoading((prev) => ({...prev, page: false}));
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  const getListData = (value: Dayjs) => {
    const listData: ICalendarData[] = [];
    if (value && value < dayjs().subtract(1, 'day')) return [];

    events.forEach((event) => {
      if (
        !event.repeat &&
        value.date() === dayjs(event.date).date() &&
        value.month() === dayjs(event.date).month() &&
        value.year() === dayjs(event.date).year()
      ) {
        listData.push({id: event._id || '', type: 'success', content: event.event});
      }

      if (event.repeat === 'daily') {
        listData.push({id: event._id || '', type: 'default', content: event.event});
      }

      if (event.repeat === 'weekly' && value.day() === dayjs(event.date).day()) {
        listData.push({id: event._id || '', type: 'processing', content: event.event});
      }

      if (event.repeat === 'monthly' && value.date() === dayjs(event.date).date()) {
        listData.push({id: event._id || '', type: 'warning', content: event.event});
      }

      if (
        event.repeat === 'yearly' &&
        value.date() === dayjs(event.date).date() &&
        value.month() === dayjs(event.date).month()
      ) {
        listData.push({id: event._id || '', type: 'error', content: event.event});
      }
    });

    return listData || [];
  };

  const deleteEvent = async (id: string) => {
    try {
      if (!id) return;
      setDellId(id);
      const res = await deleteEventQuery(id);
      if (res) {
        setEvents((prev) => prev.filter((event) => event._id !== id));
        info('Success');
      }
    } catch (e) {
      console.log(e);
      const message = errorMessage(e);
      message ? setError(message) : setError('Something went wrong. Please try again.');
    } finally {
      setDellId('');
    }
  };

  return {
    value,
    selectedValue,
    onSelect,
    getListData,
    getMonthData,
    onPanelChange,
    isLoading,
    deleteEvent,
    error,
    dellId,
  };
};
