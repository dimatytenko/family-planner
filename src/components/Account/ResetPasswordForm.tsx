import React from 'react';
import {Form} from 'antd';

import {StyledButton} from './styles';
import {InputPassword} from '../../ui-kit/Form/Input';
import {FormItem} from '../../ui-kit/Form/Form';
import {Label} from '../../ui-kit/Label';
import {IResetPasswordFormProps} from '../../types/user';
import {ResetPasswordReqBody} from '../../queries/types/user';

export const ResetPasswordForm: React.FC<IResetPasswordFormProps> = ({onSubmit, resetError, isLoading, error}) => {
  const [form] = Form.useForm();

  const onFinish = (values: ResetPasswordReqBody) => {
    onSubmit(values);
  };

  return (
    <Form
      form={form}
      name="resetPassword"
      onFinish={onFinish}
      onChange={resetError}
      scrollToFirstError
      layout="vertical">
      <FormItem
        name="oldPassword"
        label="Current password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback>
        <InputPassword />
      </FormItem>

      <FormItem
        name="newPassword"
        label="New Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback>
        <InputPassword />
      </FormItem>

      <FormItem
        name="confirm"
        label="Confirm Password"
        dependencies={['newPassword']}
        hasFeedback
        rules={[
          {
            required: true,

            message: 'Please confirm your password!',
          },
          ({getFieldValue}) => ({
            validator(_, value) {
              if (!value || getFieldValue('newPassword') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}>
        <InputPassword />
      </FormItem>

      <FormItem>
        <StyledButton variant="tertiary" htmlType="submit" loading={isLoading?.send}>
          Update password
        </StyledButton>
      </FormItem>
      {error && <Label variant="error" label={error} icon />}
    </Form>
  );
};
