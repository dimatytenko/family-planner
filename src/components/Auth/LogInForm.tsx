import React from 'react';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Form} from 'antd';

import {ILoginFormProps} from '../../types/auth';
import {loginReqBody} from '../../queries/types/auth';
import {StyledButton} from './styles';
import {Input} from '../../ui-kit/Form/Input';
import {FormItem} from '../../ui-kit/Form/Form';
import {Label} from '../../ui-kit/Label';

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
      style={{maxWidth: 450}}>
      <FormItem name="username" rules={[{required: true, message: 'Please input your Username!'}]}>
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </FormItem>
      <FormItem name="password" rules={[{required: true, message: 'Please input your Password!'}]}>
        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
      </FormItem>

      <FormItem>
        <StyledButton variant="tertiary" htmlType="submit" loading={isLoading?.send}>
          Log in
        </StyledButton>
      </FormItem>
      {error && <Label variant="error" label={error} icon />}
    </Form>
  );
};
