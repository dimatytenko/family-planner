import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {PickerValuesT, SizeCustomType, SizeType} from '../types/picker';
import {useViewer, useUpdateViewer} from '../hooks/user';
import {setPickerQuery} from '../queries/picker';
import {getEventQuery, updateEventQuery, deleteEventQuery} from '../queries/event';
import {info, loading, errorMessage} from '../helpers/common';
import {IEvent} from '../types/event';

export const usePick = (redirect?: () => void) => {
  const user = useViewer();
  const updateUser = useUpdateViewer();
  const [isLoading, setIsLoading] = useState(loading);
  const [pickerItem, setPickerItem] = useState('');
  const [pickerItems, setPickerItems] = useState(['birthday', 'meeting']);
  const [sizeForm, setSizeForm] = useState<SizeCustomType>();
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const {id} = useParams();
  const [initialValues, setInitialValues] = useState<IEvent | null>();

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
    setPickerItem(event);
  };

  const removePickerItem = (value: string) => {
    const newPickerItems = pickerItems.filter((item) => value !== item);
    setPickerItems(newPickerItems);
  };

  const onSubmit = async (values: PickerValuesT) => {
    console.log('values', values);

    const _values = {...values, repeatability: values.repeatability === 'one time' ? '' : values.repeatability};
    try {
      setIsLoading((prev) => ({...prev, send: true}));
      if (!id) {
        const res = await setPickerQuery({..._values, pickerItems});
        if (res) {
          info('Success');
          redirect?.();
          setIsLoading((prev) => ({...prev, send: false}));
        }
      } else {
        const res = await updateEventQuery(id, {..._values, pickerItems});
        if (res) {
          setInitialValues(res.body.data.event);
          info('Success');
          redirect?.();
          setIsLoading((prev) => ({...prev, send: false}));
        }
      }
    } catch (e) {
      console.log(e);
      const message = errorMessage(e);
      message ? setError(message) : setError('Something went wrong. Please try again.');
      setIsLoading((prev) => ({...prev, send: false}));
    }
  };

  const getCurrentEvent = async () => {
    try {
      if (!id) return;
      setIsLoading((prev) => ({...prev, page: true}));
      const res = await getEventQuery(id);
      if (res) {
        setInitialValues(res.body.data);
        setIsLoading((prev) => ({...prev, page: false}));
      }
    } catch (e) {
      console.log(e);
      setIsLoading((prev) => ({...prev, page: false}));
    }
  };

  const deleteEvent = async () => {
    try {
      if (!id) return;
      setIsLoading((prev) => ({...prev, delete: true}));
      const res = await deleteEventQuery(id);
      if (res) {
        info('Success');
        redirect?.();
        setIsLoading((prev) => ({...prev, delete: false}));
      }
    } catch (e) {
      console.log(e);
      const message = errorMessage(e);
      message ? setError(message) : setError('Something went wrong. Please try again.');
      setIsLoading((prev) => ({...prev, delete: false}));
    }
  };

  useEffect(() => {
    setIsLoading((prev) => ({...prev, page: true}));
    setSizeForm(user?.settings?.sizePickerForm as SizeCustomType);
    setPickerItems(user?.settings?.pickerItems as string[]);
    setIsLoading((prev) => ({...prev, page: false}));

    getCurrentEvent();
  }, []);

  useEffect(() => {
    getCurrentEvent();
  }, [id]);

  useEffect(() => {
    updateUser({...user, settings: {...user?.settings, sizePickerForm: sizeForm, pickerItems: pickerItems}});
  }, [sizeForm, pickerItems.length]);

  return {
    isLoading,
    initialValues,
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
      deleteEvent,
    },
  };
};
