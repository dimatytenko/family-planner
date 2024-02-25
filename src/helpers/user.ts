import {IUser, USER, TUserInfo} from '../types/user';

export const getUserInfo = (user?: IUser | null) => {
  return [
    {label: USER.name, field: user?.name || ''},
    {label: USER.lastName, field: user?.lastName || ''},
    {label: USER.username, field: user?.username || ''},
    {label: USER.email, field: user?.email || ''},
    {label: USER.age, field: user?.age || null},
    {label: USER.sex, field: user?.sex || ''},
    {label: USER.telegram, field: user?.telegram || ''},
  ];
};

export const getUserInfoField = (field: USER, userInfo?: TUserInfo) => {
  return userInfo?.find((item) => item?.label === field)?.field;
};
