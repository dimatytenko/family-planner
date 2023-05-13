import {Form} from 'antd';
import {pickerReqBody} from '../queries/types/event';
import {ILoading} from './common';
import {IEvent} from './event';

export type SizeType = Parameters<typeof Form>[0]['size'];
export type SizeCustomType = 'large' | 'small' | 'default';

export type PickerValuesT = pickerReqBody & {
  size: SizeCustomType;
};

export type PickerComponentPropsT = IPickerFormProps;

export interface IPickerFormProps {
  isLoading?: ILoading;
  initialValues?: IEvent | null;
  goBack?: () => void;
  formActions: {
    onSubmit: (values: PickerValuesT) => void;
    sizeForm?: SizeCustomType;
    error?: string;
    resetError?: () => void;
    pickerItems: string[];
    onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onPickerItemChange: (event: string) => void;
    addItem: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    name: string;
    onFormLayoutChange: (values: {size: SizeType; event: string}) => void;
    removePickerItem: () => void;
    deleteEvent: () => void;
  };
}

export type EventRepeatT = 'daily' | 'weekly' | 'monthly' | 'yearly';
