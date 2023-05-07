import {EventRepeatT} from './picker';
import {IUser} from '../types/user';

export interface IEvent {
  createdAt?: string;
  date?: Date;
  description?: string;
  done?: boolean;
  event?: string;
  repeat?: EventRepeatT;
  updatedAt?: string;
  user?: IUser;
  _id?: string;
}
