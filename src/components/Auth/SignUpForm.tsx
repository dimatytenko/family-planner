import React from 'react';
import {Form} from 'antd';

import {ISignUpFormProps} from '../../types/auth';
import {signupReqBody} from '../../queries/types/auth';
import {StyledButton} from './styles';
import {Input, InputPassword} from '../../ui-kit/Form/Input';
import {FormItem} from '../../ui-kit/Form/Form';
import {Label} from '../../ui-kit/Label';

export const SignUpForm: React.FC<ISignUpFormProps> = ({authData: {onSubmit, resetError, error, isLoading}}) => {
  const [form] = Form.useForm();

  const onFinish = (values: signupReqBody) => {
    onSubmit(values);
  };

  return (
    <Form form={form} name="register" onFinish={onFinish} onChange={resetError} scrollToFirstError layout="vertical">
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

      <FormItem
        name="password"
        label="Password"
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
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,

            message: 'Please confirm your password!',
          },
          ({getFieldValue}) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}>
        <InputPassword />
      </FormItem>

      <FormItem
        name="username"
        label="Username"
        rules={[{required: true, message: 'Please input your nickname!', whitespace: true}]}>
        <Input tooltip="What do you want others to call you?" />
      </FormItem>

      <FormItem>
        <StyledButton variant="tertiary" htmlType="submit" loading={isLoading?.send}>
          Sign up
        </StyledButton>
      </FormItem>
      {error && <Label variant="error" label={error} icon />}
    </Form>
  );
};
