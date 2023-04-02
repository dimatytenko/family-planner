import {TryQueryList} from '../constants/api';
import {getQuery} from './hooks';

export const tryEmailQuery = async () => await getQuery(TryQueryList.tryEmail);
