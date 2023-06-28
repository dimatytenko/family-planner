import React from 'react';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Form} from 'antd';
import {useTranslation} from 'react-i18next';

import {ILoginFormProps} from '../../types/auth';
import {loginReqBody} from '../../queries/types/auth';
import {StyledButton} from './styles';
import {Input} from '../../ui-kit/Form/Input';
import {FormItem} from '../../ui-kit/Form/Form';
import {Label} from '../../ui-kit/Label';

export const LogInForm: React.FC<ILoginFormProps> = ({authData: {onSubmit, isLoading, error, resetError}}) => {
  const [form] = Form.useForm();
  const {t} = useTranslation();

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
      layout="vertical">
      <FormItem name="username" rules={[{required: true, message: t('auth:messages.usernameRequired')}]}>
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder={t('auth:forms.username')} />
      </FormItem>
      <FormItem name="password" rules={[{required: true, message: t('auth:messages.passwordRequired')}]}>
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder={t('auth:forms.password')}
        />
      </FormItem>

      <FormItem>
        <StyledButton variant="tertiary" htmlType="submit" loading={isLoading?.send}>
          {t('auth:buttons.login')}
        </StyledButton>
      </FormItem>
      {error && <Label variant="error" label={error} icon />}
    </Form>
  );
};
