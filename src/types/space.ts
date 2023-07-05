import {RefObject} from 'react';

import {ILoading} from './common';
import {SizeCustomType} from './picker';
import {spaceReqBody} from '../queries/types/space';
import {IUser} from './user';
import {ITask} from './task';
import {statusTaskReqBody, itemStatusReqBody} from '../queries/types/task';
export interface ISpace {
  createdAt: string;
  name: string;
  description: string;
  updatedAt: string;
  user: IUser;
  users: IUser[];
  _id: string;
  tasks: ITask[];
}

export type SpaceValuesT = spaceReqBody;

export type SpacePropsT = ISpaceFormProps & {
  goBack?: () => void;
};

export interface ISpaceFormProps {
  isLoading?: ILoading;
  initialValues?: ISpace | null;
  formActions: {
    onSubmit: (values: SpaceValuesT) => void;
    sizeForm?: SizeCustomType;
    error?: string;
    resetError?: () => void;
    deleteSpace?: () => void;
  };
}

export interface ISpacesProps {
  isLoading?: ILoading;
  spaces?: ISpace[];
  error?: string;
  deleteSpace?: (id: string) => void;
  deleteTask?: (id: string) => void;
  dellId?: string;
  resetError?: () => void;
  user?: IUser | null;
  updateTaskStatus?: (id: string, body: statusTaskReqBody) => void;
  updateItemTaskStatus?: (id: string, body: itemStatusReqBody) => void;
  refSpaces?: RefObject<HTMLDivElement>;
}
