import React from 'react';
import {Form} from 'antd';
import {MinusCircleOutlined} from '@ant-design/icons';

import {SizeType} from '../../types/picker';
import {ButtonsWrapper, StyledButton, GhostWrapperStyled, ItemsInputWrapper, InputWrapper} from './styles';
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

  const initItems = initialValues?.items?.map((item) => item.name);

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

      <Form.List name="items" initialValue={initItems}>
        {(fields, {add, remove}) => (
          <>
            {fields.map((field, index) => (
              <ItemsInputWrapper key={field.key}>
                <FormItem label={index === 0 ? 'Items' : ''} required={false}>
                  <InputWrapper>
                    <FormItem
                      {...field}
                      validateTrigger={['onChange', 'onBlur']}
                      initialValue={initItems && initItems[index]}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message: 'Please input item`s text or delete this field.',
                        },
                      ]}
                      noStyle>
                      <Input placeholder="enter item`s text..." />
                    </FormItem>
                    {
                      <GhostWrapperStyled>
                        <MinusCircleOutlined onClick={() => remove(field.name)} />
                      </GhostWrapperStyled>
                    }
                  </InputWrapper>
                </FormItem>
              </ItemsInputWrapper>
            ))}
            <FormItem>
              <StyledButton onClick={() => add()}>Add item</StyledButton>
            </FormItem>
          </>
        )}
      </Form.List>

      <ButtonsWrapper>
        <FormItem>
          <StyledButton variant="success" htmlType="submit" loading={isLoading?.send}>
            Send
          </StyledButton>
        </FormItem>
        {initialValues && (
          <FormItem>
            <StyledButton variant="secondary" htmlType="button" loading={isLoading?.delete} onClick={deleteTask}>
              Delete
            </StyledButton>
          </FormItem>
        )}
      </ButtonsWrapper>
      {error && <Label variant="error" label={error} icon />}
    </Form>
  );
};
