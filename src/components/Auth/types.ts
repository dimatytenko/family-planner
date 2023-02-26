import {signupReqBody} from '../../queries/types/auth';

export type SignUpComponentPropsT = {
  onSubmit: (values: signupReqBody) => void;
};

export type SignUpFormPropsT = SignUpComponentPropsT;

export type LoginComponentPropsT = {
  onSubmit: (values: signupReqBody) => void;
};

export type LoginFormPropsT = LoginComponentPropsT;
