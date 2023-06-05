import React from 'react';
import {Form} from 'antd';

import {SizeType} from '../../types/picker';
import {ButtonsWrapper, StyledButton} from './styles';
import {FormItem} from '../../ui-kit/Form/Form';
import {Input} from '../../ui-kit/Form/Input';
import {Label} from '../../ui-kit/Label';
import {ITaskFormProps, TaskValuesT} from '../../types/task';
import {Select} from '../../ui-kit/Form/Select';
import {TASK_STATUSES} from '../../queries/types/task';

export const TaskForm: React.FC<ITaskFormProps> = ({
  isLoading,
  initialAssignee,
  initialValues,
  formActions: {onSubmit, resetError, error, sizeForm, deleteTask},
}) => {
  const [form] = Form.useForm();

  const onFinish = (values: TaskValuesT) => {
    onSubmit(values);
    form.resetFields();
  };

  const itemsStatuses = initialValues
    ? [TASK_STATUSES.TODO, TASK_STATUSES.IN_PROGRESS, TASK_STATUSES.DONE]
    : [TASK_STATUSES.TODO];

  return (
    <Form
      form={form}
      onFinish={onFinish}
      onChange={resetError}
      layout="vertical"
      initialValues={{size: sizeForm}}
      size={sizeForm as SizeType}
      style={{maxWidth: 450}}>
      <FormItem
        name="name"
        label="Task"
        initialValue={initialValues?.name}
        rules={[{required: true, message: 'Task is required!'}]}>
        <Input />
      </FormItem>

      <FormItem
        label="Status"
        name="status"
        initialValue={initialValues ? initialValues.status : TASK_STATUSES.TODO}
        rules={[{required: true, message: 'status is required!'}]}>
        <Select
          placeholder="status"
          options={itemsStatuses.map((item) => ({
            label: item,
            value: item,
          }))}
        />
      </FormItem>

      <FormItem
        label="Assignee"
        name="assignee"
        rules={[{required: true, message: 'assignee is required!'}]}
        initialValue={initialValues?.assignee?.username}>
        <Select
          placeholder="assignee"
          options={initialAssignee?.map((item) => ({
            label: item.username,
            value: item.username,
          }))}
        />
      </FormItem>

      <ButtonsWrapper>
        <FormItem>
          <StyledButton variant="success" htmlType="submit" loading={isLoading?.send}>
            Send
          </StyledButton>
        </FormItem>
        {initialValues && (
          <StyledButton variant="secondary" htmlType="button" loading={isLoading?.delete} onClick={deleteTask}>
            Delete
          </StyledButton>
        )}
      </ButtonsWrapper>
      {error && <Label variant="error" label={error} icon />}
    </Form>
  );
};
