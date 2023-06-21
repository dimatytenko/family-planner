export enum TASK_STATUSES {
  DEFAULT = 'do',
  TODO = 'todo',
  IN_PROGRESS = 'inProgress',
  DONE = 'done',
}

export type taskReqBody = {
  name: string;
  status?: TASK_STATUSES;
  assignee: string;
  items?: ITasksItem[];
};

export type statusTaskReqBody = {
  status?: TASK_STATUSES;
};

export interface ITasksItem {
  name: string;
  status: boolean;
}

export type itemStatusReqBody = {
  name?: string;
};
