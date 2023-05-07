import {ILoading} from './common';

export interface IUser {
  id?: string;
  username?: string;
  email?: string;
  avatar?: string;
  name?: string;
  lastName?: string;
  sex?: string;
  age?: number;
  settings?: {
    sizePickerForm?: string;
    pickerItems?: string[];
  };
}

export interface IUSerInfo {
  label: string;
  field: string | number | null;
}

export type TUserInfo = IUSerInfo[];

export type TUserInfoProps = IUserFormProps;

export interface IUserFormProps {
  userData: {
    onSubmit: (values: IUserValues, onSuccess?: () => void) => void;
    isLoading?: ILoading;
    error?: string;
    resetError?: () => void;
  };
  onChangeMode?: () => void;
  userInfo?: TUserInfo;
}

export interface IUserValues {
  name?: string;
  lastName?: string;
  email: string;
  username: string;
  age?: number;
  sex?: string;
}

export enum USER {
  name = 'Name',
  lastName = 'Last name',
  username = 'Username',
  email = 'Email',
  age = 'Age',
  sex = 'Gender',
}
