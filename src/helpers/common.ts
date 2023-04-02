import {message} from 'antd';

export const info = (mess: string) => {
  message.info(mess);
};

export const loading = {page: false, send: false};

export const errorMessage = (e: any) => {
  const error = JSON.parse(JSON.stringify(e));
  const errorMessage = error?.response?.body?.message;
  return errorMessage || 'Error';
};
