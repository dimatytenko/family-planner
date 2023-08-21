import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {useViewer} from '../hooks/user';
import {info, loading, errorMessage} from '../helpers/common';
import {SpaceValuesT, ISpace, ISpacesOrder} from '../types/space';
import {createSpaceQuery, getSpaceQuery, updateSpaceQuery, deleteSpaceQuery, getSpacesQuery} from '../queries/space';
import {SizeCustomType} from '../types/picker';
import {deleteTaskQuery, updateTaskStatusQuery, updateItemStatusQuery} from '../queries/task';
import {statusTaskReqBody, itemStatusReqBody} from '../queries/types/task';
import {storageLocal} from '../utils/storageLocal';

export const useSpace = (redirect?: () => void) => {
  const {id} = useParams();
  const user = useViewer();
  const [isLoading, setIsLoading] = useState(loading);
  const [error, setError] = useState('');
  const [initialValues, setInitialValues] = useState<ISpace | null>();

  const resetError = () => setError('');

  const onSubmit = async (values: SpaceValuesT) => {
    try {
      setIsLoading((prev) => ({...prev, send: true}));
      if (!id) {
        const res = await createSpaceQuery(values);
        if (res) {
          const spacesOrder = storageLocal.get<ISpacesOrder[]>('spacesOrder') || [];
          const updateSpacesOrder = [...spacesOrder, {id: res.body.data._id, order: spacesOrder.length}];
          storageLocal.set('spacesOrder', updateSpacesOrder);

          info('Success');
          redirect?.();
        }
      } else {
        const res = await updateSpaceQuery(id, values);
        if (res) {
          info('Success');
          redirect?.();
        }
      }
    } catch (e) {
      console.log(e);
      const message = errorMessage(e);
      message ? setError(message) : setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading((prev) => ({...prev, send: false}));
    }
  };

  const getCurrentSpace = async () => {
    try {
      if (!id) return;
      setIsLoading((prev) => ({...prev, page: true}));
      const res = await getSpaceQuery(id);
      if (res) {
        setInitialValues(res.body.data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading((prev) => ({...prev, page: false}));
    }
  };

  const deleteSpace = async () => {
    try {
      if (!id) return;
      setIsLoading((prev) => ({...prev, delete: true}));
      const res = await deleteSpaceQuery(id);
      if (res) {
        const spacesOrder = storageLocal.get<ISpacesOrder[]>('spacesOrder') || [];
        const updateSpacesOrder = spacesOrder.filter((item) => item.id !== id);
        storageLocal.set('spacesOrder', updateSpacesOrder);
        info('Success');
        redirect?.();
      }
    } catch (e) {
      console.log(e);
      const message = errorMessage(e);
      message ? setError(message) : setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading((prev) => ({...prev, delete: false}));
    }
  };

  useEffect(() => {
    getCurrentSpace();
  }, [id]);

  return {
    isLoading,
    initialValues,
    formActions: {
      error,
      resetError,
      onSubmit,
      sizeForm: user?.settings?.sizePickerForm as SizeCustomType,
      deleteSpace,
    },
  };
};

export const useSpaceList = () => {
  const [isLoading, setIsLoading] = useState({...loading, page: true});
  const [error, setError] = useState('');
  const [spaces, setSpaces] = useState<ISpace[]>([]);
  const [dellId, setDellId] = useState('');
  const user = useViewer();

  const resetError = () => setError('');

  const getSpaces = async () => {
    try {
      setIsLoading((prev) => ({...prev, page: true}));
      const res = await getSpacesQuery();
      if (res) {
        const spacesOrder = storageLocal.get<ISpacesOrder[]>('spacesOrder') || [];

        if (!spacesOrder.length) {
          const updateSpaces = res.body.data.map((item: ISpace, ind: number) => {
            return {...item, order: ind};
          });
          const spacesOrder = updateSpaces.map((item: ISpace) => {
            return {order: item.order, id: item._id};
          });
          storageLocal.set('spacesOrder', spacesOrder);
          setSpaces(updateSpaces);
          setIsLoading((prev) => ({...prev, page: false}));
        }

        if (spacesOrder.length) {
          const updatedSpacesOrder = spacesOrder.map((item) => {
            if (item.order !== undefined) {
              return item;
            } else {
              return {...item, order: spacesOrder.length - 1};
            }
          });

          storageLocal.set('spacesOrder', updatedSpacesOrder);

          const updateSpaces = res.body.data.map((item: ISpace) => {
            return {...item, order: updatedSpacesOrder?.find((el) => el.id === item._id)?.order};
          });
          setSpaces(updateSpaces);
          setIsLoading((prev) => ({...prev, page: false}));
        }
      }
    } catch (e) {
      console.log(e);
      const message = errorMessage(e);
      message ? setError(message) : setError('Something went wrong. Please try again.');
      setIsLoading((prev) => ({...prev, page: false}));
    } finally {
    }
  };

  const deleteSpace = async (id: string) => {
    try {
      if (!id) return;
      setDellId(id);
      const res = await deleteSpaceQuery(id);
      if (res) {
        setSpaces((prev) => prev.filter((item) => item._id !== id));
        const spacesOrder = storageLocal.get<ISpacesOrder[]>('spacesOrder') || [];
        const updateSpacesOrder = spacesOrder.filter((item) => item.id !== id);
        storageLocal.set('spacesOrder', updateSpacesOrder);
        info('Success');
      }
    } catch (e) {
      console.log(e);
      const message = errorMessage(e);
      message ? setError(message) : setError('Something went wrong. Please try again.');
    } finally {
      setDellId('');
    }
  };

  const deleteTask = async (id: string) => {
    try {
      if (!id) return;
      setDellId(id);
      const res = await deleteTaskQuery(id);
      if (res) {
        setSpaces((prev) => prev.map((item) => ({...item, tasks: item.tasks.filter((task) => task._id !== id)})));
        info('Success');
      }
    } catch (e) {
      console.log(e);
      const message = errorMessage(e);
      message ? setError(message) : setError('Something went wrong. Please try again.');
    } finally {
      setDellId('');
    }
  };

  useEffect(() => {
    getSpaces();
  }, []);

  const updateTaskStatus = async (taskId: string, values: statusTaskReqBody) => {
    try {
      if (!taskId) return;
      setIsLoading((prev) => ({...prev, send: true}));
      const res = await updateTaskStatusQuery(taskId, values);
      if (res) {
        setSpaces((prev) =>
          prev.map((item) => ({
            ...item,
            tasks: item.tasks.map((task) =>
              task._id === res.body.data._id ? {...task, status: res.body.data.status} : task,
            ),
          })),
        );
        info('Success');
      }
    } catch (e) {
      console.log(e);
      const message = errorMessage(e);
      message ? setError(message) : setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading((prev) => ({...prev, send: false}));
    }
  };

  const updateItemTaskStatus = async (taskId: string, values: itemStatusReqBody) => {
    try {
      if (!taskId) return;
      setIsLoading((prev) => ({...prev, send: true}));
      const res = await updateItemStatusQuery(taskId, values);
      if (res) {
        setSpaces((prev) =>
          prev.map((item) => ({
            ...item,
            tasks: item.tasks.map((task) =>
              task._id === res.body.data._id ? {...task, items: res.body.data.items} : task,
            ),
          })),
        );
        // info('Success');
      }
    } catch (e) {
      console.log(e);
      const message = errorMessage(e);
      message ? setError(message) : setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading((prev) => ({...prev, send: false}));
    }
  };

  return {
    isLoading,
    spaces,
    error,
    resetError,
    dellId,
    deleteSpace,
    user,
    deleteTask,
    updateTaskStatus,
    updateItemTaskStatus,
  };
};
