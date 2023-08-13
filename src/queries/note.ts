import {NoteQueryList} from '../constants/api';

import {postQuery, getQuery, patchQuery} from './hooks';

export const getNoteQuery = async () => await getQuery(NoteQueryList.getNote());

export const updateNoteQuery = async (body: {content: string}) =>
  await patchQuery(NoteQueryList.updateNote()).send(body);

export const createNoteQuery = async () => await postQuery(NoteQueryList.createNote());
