import React from 'react';
import {Form} from 'antd';
import {useTranslation} from 'react-i18next';

import {StyledButton} from './styles';
import {InputPassword} from '../../ui-kit/Form/Input';
import {FormItem} from '../../ui-kit/Form/Form';
import {Label} from '../../ui-kit/Label';
import {IResetPasswordFormProps} from '../../types/user';
import {ResetPasswordReqBody} from '../../queries/types/user';

export const ResetPasswordForm: React.FC<IResetPasswordFormProps> = ({onSubmit, resetError, isLoading, error}) => {
  const [form] = Form.useForm();
  const {t} = useTranslation();

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
        label={t('account:forms.currentPassword')}
        rules={[
          {
            required: true,
            message: t('account:messages.passwordRequired'),
          },
        ]}
        hasFeedback>
        <InputPassword />
      </FormItem>

      <FormItem
        name="newPassword"
        label={t('account:forms.newPassword')}
        rules={[
          {
            required: true,
            message: t('account:messages.passwordRequired'),
          },
        ]}
        hasFeedback>
        <InputPassword />
      </FormItem>

      <FormItem
        name="confirm"
        label={t('account:forms.confirmPassword')}
        dependencies={['newPassword']}
        hasFeedback
        rules={[
          {
            required: true,

            message: t('account:messages.passwordConfirm'),
          },
          ({getFieldValue}) => ({
            validator(_, value) {
              if (!value || getFieldValue('newPassword') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error(t('account:messages.confirmPasswordFormat')));
            },
          }),
        ]}>
        <InputPassword />
      </FormItem>

      <FormItem>
        <StyledButton variant="tertiary" htmlType="submit" loading={isLoading?.send}>
          {t('account:buttons.updatePassword')}
        </StyledButton>
      </FormItem>
      {error && <Label variant="error" label={error} icon />}
    </Form>
  );
};
