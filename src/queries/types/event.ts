import {EventRepeatT} from '../../types/picker';

export type pickerReqBody = {
  date?: Date | string;
  descr?: string;
  event?: string;
  repeatability?: EventRepeatT;
  size?: string;
  pickerItems?: string[];
};

export type TId = string;

export type allDateEventsBody = {
  date?: Date | string;
};
