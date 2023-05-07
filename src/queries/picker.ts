import {PickerQueryList} from '../constants/api';
import {postQuery} from './hooks';
import {pickerReqBody} from './types/event';

export const setPickerQuery = async (body: pickerReqBody) => await postQuery(PickerQueryList.pick).send(body);
