import {TaskQueryList} from '../constants/api';
import {postQuery, getQuery, deleteQuery, putQuery, patchQuery} from './hooks';
import {taskReqBody, statusTaskReqBody} from './types/task';

export const createTaskQuery = async (spaceId: string, body: taskReqBody) =>
  await postQuery(TaskQueryList.createSpace(spaceId)).send(body);

export const getTaskQuery = async (taskId: string) => await getQuery(TaskQueryList.getSpace(taskId));

export const deleteTaskQuery = async (taskId: string) => await deleteQuery(TaskQueryList.deleteSpace(taskId));

export const updateTaskQuery = async (taskId: string, body: taskReqBody) =>
  await putQuery(TaskQueryList.updateSpace(taskId)).send(body);

export const updateTaskStatusQuery = async (taskId: string, body: statusTaskReqBody) =>
  await patchQuery(TaskQueryList.updateSpaceStatus(taskId)).send(body);
