import {EventQueryList} from '../constants/api';
import {getQuery, putQuery, deleteQuery} from './hooks';
import {pickerReqBody, TId} from './types/event';

export const getAllEventsQuery = async () => await getQuery(EventQueryList.allEvents());

export const getEventQuery = async (eventId: TId) => await getQuery(EventQueryList.event(eventId));

export const updateEventQuery = async (eventId: TId, body: pickerReqBody) =>
  await putQuery(EventQueryList.eventUpdate(eventId)).send(body);

export const deleteEventQuery = async (eventId: TId) => await deleteQuery(EventQueryList.eventDelete(eventId));
