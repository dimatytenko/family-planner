import {message} from 'antd';
import type {RcFile} from 'antd/es/upload';

export const info = (mess: string) => {
  message.info(mess);
};

export const loading = {page: false, send: false, delete: false};

export const errorMessage = (e: any) => {
  const error = JSON.parse(JSON.stringify(e));
  const errorMessage = error?.response?.body?.message;
  return errorMessage || 'Error';
};

export const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
