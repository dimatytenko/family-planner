import React from 'react';
import {Form} from 'antd';

import {StyledButton} from './styles';
import {Input} from '../../ui-kit/Form/Input';
import {FormItem} from '../../ui-kit/Form/Form';
import {Label} from '../../ui-kit/Label';
import {IReverifyFormProps} from '../../types/auth';
import {reverifyReqBody} from '../../queries/types/auth';

export const ReverifyForm: React.FC<IReverifyFormProps> = ({titleButton, onSubmit, resetError, isLoading, error}) => {
  const [form] = Form.useForm();

  const onFinish = (values: reverifyReqBody) => {
    onSubmit(values);
  };

  return (
    <Form form={form} name="reverify" onFinish={onFinish} onChange={resetError} scrollToFirstError layout="vertical">
      <FormItem
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}>
        <Input />
      </FormItem>

      <FormItem>
        <StyledButton variant="tertiary" htmlType="submit" loading={isLoading?.send}>
          {titleButton}
        </StyledButton>
      </FormItem>
      {error && <Label variant="error" label={error} icon />}
    </Form>
  );
};
