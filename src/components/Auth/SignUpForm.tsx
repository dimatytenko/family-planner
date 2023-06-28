import React from 'react';
import {Form} from 'antd';
import {useTranslation} from 'react-i18next';

import {ISignUpFormProps} from '../../types/auth';
import {signupReqBody} from '../../queries/types/auth';
import {StyledButton} from './styles';
import {Input, InputPassword} from '../../ui-kit/Form/Input';
import {FormItem} from '../../ui-kit/Form/Form';
import {Label} from '../../ui-kit/Label';

export const SignUpForm: React.FC<ISignUpFormProps> = ({authData: {onSubmit, resetError, error, isLoading}}) => {
  const [form] = Form.useForm();
  const {t} = useTranslation();

  const onFinish = (values: signupReqBody) => {
    onSubmit(values);
  };

  return (
    <Form form={form} name="register" onFinish={onFinish} onChange={resetError} scrollToFirstError layout="vertical">
      <FormItem
        name="email"
        label={t('auth:forms.email')}
        rules={[
          {
            type: 'email',
            message: t('auth:messages.emailFormat'),
          },
          {
            required: true,
            message: t('auth:messages.emailRequired'),
          },
        ]}>
        <Input />
      </FormItem>

      <FormItem
        name="password"
        label={t('auth:forms.password')}
        rules={[
          {
            required: true,
            message: t('auth:messages.passwordRequired'),
          },
        ]}
        hasFeedback>
        <InputPassword />
      </FormItem>

      <FormItem
        name="confirm"
        label={t('auth:forms.confirmPassword')}
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: t('auth:messages.passwordConfirm'),
          },
          ({getFieldValue}) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error(t('auth:messages.confirmPasswordFormat')));
            },
          }),
        ]}>
        <InputPassword />
      </FormItem>

      <FormItem
        name="username"
        label={t('auth:forms.username')}
        rules={[{required: true, message: t('auth:messages.usernameRequired'), whitespace: true}]}>
        <Input tooltip={t('auth:notes.callYou')} />
      </FormItem>

      <FormItem>
        <StyledButton variant="tertiary" htmlType="submit" loading={isLoading?.send}>
          {t('auth:buttons.signUp')}
        </StyledButton>
      </FormItem>
      {error && <Label variant="error" label={error} icon />}
    </Form>
  );
};
