import React from 'react';
import {Button, Form, Input} from 'antd';

import {ISignUpFormProps} from '../../types/auth';
import {signupReqBody} from '../../queries/types/auth';

export const SignUpForm: React.FC<ISignUpFormProps> = ({authData: {onSubmit, resetError, error, isLoading}}) => {
  const [form] = Form.useForm();

  const onFinish = (values: signupReqBody) => {
    onSubmit(values);
  };

  return (
    <Form
      form={form}
      name="register"
      onFinish={onFinish}
      onChange={resetError}
      scrollToFirstError
      layout="vertical"
      style={{maxWidth: 600}}>
      <Form.Item
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
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback>
        <Input.Password />
      </Form.Item>

      <Form.Item
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
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="username"
        label="Username"
        tooltip="What do you want others to call you?"
        rules={[{required: true, message: 'Please input your nickname!', whitespace: true}]}>
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading?.send}>
          Sign up
        </Button>
      </Form.Item>
      {error && <div style={{color: 'red'}}>{error}</div>}
    </Form>
  );
};
