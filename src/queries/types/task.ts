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
};

export type statusTaskReqBody = {
  status?: TASK_STATUSES;
};
