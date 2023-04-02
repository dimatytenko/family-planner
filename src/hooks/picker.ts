import {useState, useEffect} from 'react';

import {PickerValuesT, SizeCustomType, SizeType} from '../types/picker';
import {useViewer, useUpdateViewer} from '../hooks/auth';
import {setPickerQuery} from '../queries/picker';
import {info, loading} from '../helpers/common';

export const usePick = (redirect?: () => void) => {
  const user = useViewer();
  const updateUser = useUpdateViewer();
  const [isLoading, setIsLoading] = useState(loading);
  const [pickerItem, setPickerItem] = useState('');
  const [pickerItems, setPickerItems] = useState(['birthday', 'meeting']);
  const [sizeForm, setSizeForm] = useState<SizeCustomType>();
  const [error, setError] = useState('');
  const [name, setName] = useState('');

  const resetError = () => setError('');

  const onFormLayoutChange = ({size}: {size: SizeType}) => {
    if (!size) return;
    setSizeForm(size as SizeCustomType);
  };

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const addItem = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    if (!name) return;
    setPickerItems([...pickerItems, name]);
    setName('');
  };

  const onPickerItemChange = (event: string) => {
    console.log(event);
    setPickerItem(event);
  };

  const removePickerItem = () => {
    if (!pickerItem) return;
    const newPickerItems = pickerItems.filter((item) => pickerItem !== item);
    setPickerItems(newPickerItems);
  };

  const onSubmit = async (values: PickerValuesT) => {
    try {
      setIsLoading((prev) => ({...prev, send: true}));
      const res = await setPickerQuery({...values, pickerItems});
      console.log('body.success', res);
      if (res) {
        info('Success');
        redirect?.();
      }
      setIsLoading((prev) => ({...prev, send: false}));
    } catch (error) {
      console.log('error', error);
      setError('Something went wrong. Please try again.');
      setIsLoading((prev) => ({...prev, send: false}));
    }
  };

  useEffect(() => {
    setIsLoading((prev) => ({...prev, page: true}));
    setSizeForm(user?.settings?.sizePickerForm as SizeCustomType);
    setPickerItems(user?.settings?.pickerItems as string[]);
    setIsLoading((prev) => ({...prev, page: false}));
  }, []);

  useEffect(() => {
    updateUser({...user, settings: {...user?.settings, sizePickerForm: sizeForm, pickerItems: pickerItems}});
  }, [sizeForm, pickerItems.length]);

  return {
    isLoading,
    formActions: {
      onFormLayoutChange,
      name,
      onNameChange,
      onPickerItemChange,
      sizeForm,
      addItem,
      pickerItems,
      error,
      resetError,
      onSubmit,
      pickerItem,
      setPickerItem,
      removePickerItem,
    },
  };
};
