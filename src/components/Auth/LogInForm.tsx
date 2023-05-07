import React from 'react';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Form, Input} from 'antd';

import {ILoginFormProps} from '../../types/auth';
import {loginReqBody} from '../../queries/types/auth';

export const LogInForm: React.FC<ILoginFormProps> = ({authData: {onSubmit, isLoading, error, resetError}}) => {
  const [form] = Form.useForm();

  const onFinish = (values: loginReqBody) => {
    onSubmit(values);
  };

  return (
    <Form
      form={form}
      name="normal_login"
      className="login-form"
      initialValues={{remember: true}}
      onFinish={onFinish}
      onChange={resetError}
      layout="vertical"
      style={{maxWidth: 600}}>
      <Form.Item name="username" rules={[{required: true, message: 'Please input your Username!'}]}>
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item name="password" rules={[{required: true, message: 'Please input your Password!'}]}>
        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" loading={isLoading?.send}>
          Log in
        </Button>
      </Form.Item>
      {error && <div style={{color: 'red'}}>{error}</div>}
    </Form>
  );
};
