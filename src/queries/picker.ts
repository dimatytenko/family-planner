import {PickerQueryList} from '../constants/api';
import {postQuery} from './hooks';
import {pickerReqBody} from './types/picker';

export const setPickerQuery = async (body: pickerReqBody) => await postQuery(PickerQueryList.pick).send(body);
