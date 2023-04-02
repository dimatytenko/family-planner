import {Form} from 'antd';
import {pickerReqBody} from '../queries/types/picker';
import {LoadingT} from './common';

export type SizeType = Parameters<typeof Form>[0]['size'];
export type SizeCustomType = 'large' | 'small' | 'default';

export type PickerValuesT = pickerReqBody & {
  size: SizeCustomType;
};

export type PickerComponentPropsT = PickerFormPropsT;

export type PickerFormPropsT = {
  isLoading?: LoadingT;
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
  };
};
