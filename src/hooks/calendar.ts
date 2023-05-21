import {useState, useEffect} from 'react';
import dayjs from 'dayjs';
import type {Dayjs} from 'dayjs';

import {getAllEventsQuery, deleteEventQuery, getAllDateEventsQuery} from '../queries/event';
import {IEvent} from '../types/event';
import {info, loading, errorMessage} from '../helpers/common';

export const useEventList = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [isLoading, setIsLoading] = useState({...loading, page: true});
  const [dellId, setDellId] = useState('');
  const [error, setError] = useState('');

  const getEvents = async () => {
    try {
      const res = await getAllDateEventsQuery({date: dayjs().format('YYYY-MM-DD')});
      if (res) {
        setEvents(res.body.data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading((prev) => ({...prev, page: false}));
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

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
    events,
    deleteEvent,
    error,
    dellId,
    isLoading,
  };
};

const getMonthData = (value: Dayjs) => {
  if (value.month() === 8) {
    return 1394;
  }
};

export const useCalendarData = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [value, setValue] = useState(() => dayjs());
  const [selectedValue, setSelectedValue] = useState(() => dayjs());
  const [isLoading, setIsLoading] = useState({...loading, page: true});
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
      const res = await getAllEventsQuery();
      if (res) {
        setEvents(res.body.data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading((prev) => ({...prev, page: false}));
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

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
    getMonthData,
    onPanelChange,
    isLoading,
    deleteEvent,
    error,
    dellId,
    events,
  };
};
