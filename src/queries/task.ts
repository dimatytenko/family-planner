import {TaskQueryList} from '../constants/api';
import {postQuery, getQuery, deleteQuery, putQuery, patchQuery} from './hooks';
import {taskReqBody, statusTaskReqBody, itemStatusReqBody} from './types/task';

export const createTaskQuery = async (spaceId: string, body: taskReqBody) =>
  await postQuery(TaskQueryList.createTask(spaceId)).send(body);

export const getTaskQuery = async (taskId: string) => await getQuery(TaskQueryList.getTask(taskId));

export const deleteTaskQuery = async (taskId: string) => await deleteQuery(TaskQueryList.deleteTask(taskId));

export const updateTaskQuery = async (taskId: string, body: taskReqBody) =>
  await putQuery(TaskQueryList.updateTask(taskId)).send(body);

export const updateTaskStatusQuery = async (taskId: string, body: statusTaskReqBody) =>
  await patchQuery(TaskQueryList.updateTaskStatus(taskId)).send(body);

export const updateItemStatusQuery = async (taskId: string, body: itemStatusReqBody) =>
  await patchQuery(TaskQueryList.updateItemStatus(taskId)).send(body);
