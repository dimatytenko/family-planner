import {ILoading} from './common';
import {IUser} from './user';
import {ISpace} from './space';
import {TASK_STATUSES, ITasksItem} from '../queries/types/task';
import {SizeCustomType} from './picker';

export interface ITask {
  createdAt: string;
  updatedAt: string;
  name: string;
  user: IUser;
  _id: string;
  space: ISpace;
  status: TASK_STATUSES;
  assignee: IUser;
  users?: IUser[];
  items?: ITasksItem[];
}

export type TaskValuesT = {name: string; status?: TASK_STATUSES; assignee: string; items?: string[]};

export type TaskPropsT = ITaskFormProps & {
  goBack?: () => void;
};

export interface ITaskFormProps {
  isLoading?: ILoading;
  initialAssignee?: IInitialAssignee[];
  initialValues?: ITask | null;
  formActions: {
    onSubmit: (values: TaskValuesT) => void;
    sizeForm?: SizeCustomType;
    error?: string;
    resetError?: () => void;
    deleteTask?: () => void;
  };
}

export interface IInitialAssignee {
  id: string;
  avatar: string;
  username: string;
}
