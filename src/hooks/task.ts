import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {useViewer} from '../hooks/user';
import {info, loading, errorMessage} from '../helpers/common';
import {TaskValuesT, IInitialAssignee} from '../types/task';
import {createTaskQuery, getTaskQuery, deleteTaskQuery, updateTaskQuery} from '../queries/task';
import {SizeCustomType} from '../types/picker';
import {getSpaceQuery} from '../queries/space';
import {ITask} from '../types/task';

export const useTask = (redirect?: () => void) => {
  const {id, taskId} = useParams();
  const user = useViewer();
  const [isLoading, setIsLoading] = useState(loading);
  const [error, setError] = useState('');
  const [initialValues, setInitialValues] = useState<ITask | null>();
  const [initialAssignee, setInitialAssignee] = useState<IInitialAssignee[]>();
  console.log('id', id);

  const resetError = () => setError('');

  const onSubmit = async (values: TaskValuesT) => {
    try {
      setIsLoading((prev) => ({...prev, send: true}));
      if (!taskId) {
        if (!id) return;
        const res = await createTaskQuery(id, values);
        if (res) {
          info('Success');
          redirect?.();
        }
      } else {
        if (!taskId) return;
        const res = await updateTaskQuery(taskId, values);
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

  const getCurrentTask = async () => {
    try {
      if (!taskId) return;
      setIsLoading((prev) => ({...prev, page: true}));
      const res = await getTaskQuery(taskId);
      if (res) {
        setInitialValues(res.body.data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading((prev) => ({...prev, page: false}));
    }
  };

  useEffect(() => {
    getCurrentTask();
  }, [taskId]);

  const getCurrentSpace = async () => {
    try {
      if (!id) return;
      setIsLoading((prev) => ({...prev, page: true}));
      const res = await getSpaceQuery(id);
      if (res) {
        console.log('res', res);
        setInitialAssignee(res.body.data.users);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading((prev) => ({...prev, page: false}));
    }
  };

  useEffect(() => {
    getCurrentSpace();
  }, [id]);

  const deleteTask = async () => {
    try {
      if (!taskId) return;
      setIsLoading((prev) => ({...prev, delete: true}));
      const res = await deleteTaskQuery(taskId);
      if (res) {
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

  return {
    isLoading,
    initialAssignee,
    initialValues,
    formActions: {
      error,
      resetError,
      onSubmit,
      sizeForm: user?.settings?.sizePickerForm as SizeCustomType,
      deleteTask,
    },
  };
};
