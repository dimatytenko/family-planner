import {signupReqBody, loginReqBody, reverifyReqBody} from '../queries/types/auth';
import {ILoading} from './common';
import {IUser} from '../types/user';

export interface Session {
  sessionToken: string;
  user: IUser;
}

export interface ISignUpFormProps {
  authData: {
    onSubmit: (values: signupReqBody) => void;
    isLoading?: ILoading;
    error?: string;
    resetError?: () => void;
  };
}

export type SignUpComponentPropsT = ISignUpFormProps;

export interface ILoginFormProps {
  authData: {
    onSubmit: (values: loginReqBody) => void;
    isLoading?: ILoading;
    error?: string;
    resetError?: () => void;
  };
}

export type LoginComponentPropsT = ILoginFormProps & {
  goToReverify?: () => void;
  goToForgotPassword?: () => void;
};

export interface IReverifyFormProps {
  titleButton?: string;
  onSubmit: (values: reverifyReqBody) => void;
  isLoading?: ILoading;
  error?: string;
  resetError?: () => void;
}

export interface IReverifyProps extends IReverifyFormProps {
  message?: string;
}
