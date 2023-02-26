import React from 'react';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Form, Input} from 'antd';

import {LoginFormPropsT} from './types';

export const LogInForm: React.FC<LoginFormPropsT> = ({onSubmit}) => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    onSubmit(values);
  };

  return (
    <Form name="normal_login" className="login-form" initialValues={{remember: true}} onFinish={onFinish}>
      <Form.Item name="username" rules={[{required: true, message: 'Please input your Username!'}]}>
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item name="password" rules={[{required: true, message: 'Please input your Password!'}]}>
        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};
