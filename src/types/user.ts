import {ILoading} from './common';
import {ResetPasswordReqBody} from '../queries/types/user';

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
  _id?: string;
}

export interface IUSerInfo {
  label: string;
  field: string | number | null;
}

export type TUserInfo = IUSerInfo[];

export type TUserInfoProps = IUserFormProps &
  IAccountAvatarProps & {
    goToChangePassword?: () => void;
  };

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
  name = 'name',
  lastName = 'lastName',
  username = 'username',
  email = 'email',
  age = 'age',
  sex = 'gender',
}

export interface IAccountAvatarProps {
  avatarData: {
    previewOpen: boolean;
    previewImage: string;
    previewTitle: string;
    fileList: any[];
    handlePreview: (file: any) => void;
    handleChange: (info: any) => void;
    handleCancel: () => void;
    avatarRef: any;
    configAvatar: any;
    generateAvatar: () => void;
    saveGenerateAvatar: () => void;
    deleteAvatar: () => void;
  };
}

export interface IUserInfoProps {
  userInfo?: TUserInfo;
  onChangeMode?: () => void;
  goToChangePassword?: () => void;
}

export interface IResetPasswordFormProps {
  onSubmit: (values: ResetPasswordReqBody) => void;
  isLoading?: ILoading;
  error?: string;
  resetError?: () => void;
}

export interface IResetPasswordProps extends IResetPasswordFormProps {
  message?: string;
}

export interface IUsersListProps {
  users: IUser[] | [];
  loading?: boolean;
}

export interface IUserProps {
  user: IUser;
}
