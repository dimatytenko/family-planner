import {signupReqBody, loginReqBody} from '../queries/types/auth';
import {LoadingT} from './common';

export interface User {
  id?: string;
  username?: string;
  email?: string;
  settings?: {
    sizePickerForm?: string;
    pickerItems?: string[];
  };
}

export interface Session {
  sessionToken: string;
  user: User;
}

export type SignUpFormPropsT = {
  authData: {
    onSubmit: (values: signupReqBody) => void;
    isLoading?: LoadingT;
    error?: string;
    resetError?: () => void;
  };
};

export type SignUpComponentPropsT = SignUpFormPropsT;

export type LoginFormPropsT = {
  authData: {
    onSubmit: (values: loginReqBody) => void;
    isLoading?: LoadingT;
    error?: string;
    resetError?: () => void;
  };
};

export type LoginComponentPropsT = LoginFormPropsT;
