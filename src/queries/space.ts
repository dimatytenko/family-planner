import {SpaceQueryList} from '../constants/api';
import {postQuery, getQuery, deleteQuery, putQuery} from './hooks';
import {spaceReqBody} from './types/space';

export const createSpaceQuery = async (body: spaceReqBody) => await postQuery(SpaceQueryList.createSpace()).send(body);

export const getSpaceQuery = async (spaceId: string) => await getQuery(SpaceQueryList.getSpace(spaceId));

export const updateSpaceQuery = async (spaceId: string, body: spaceReqBody) =>
  await putQuery(SpaceQueryList.updateSpace(spaceId)).send(body);

export const deleteSpaceQuery = async (spaceId: string) => await deleteQuery(SpaceQueryList.deleteSpace(spaceId));

export const getSpacesQuery = async () => await getQuery(SpaceQueryList.getSpaces());
