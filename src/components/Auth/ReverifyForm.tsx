import React from 'react';
import {Form} from 'antd';
import {useTranslation} from 'react-i18next';

import {StyledButton} from './styles';
import {Input} from '../../ui-kit/Form/Input';
import {FormItem} from '../../ui-kit/Form/Form';
import {Label} from '../../ui-kit/Label';
import {IReverifyFormProps} from '../../types/auth';
import {reverifyReqBody} from '../../queries/types/auth';

export const ReverifyForm: React.FC<IReverifyFormProps> = ({titleButton, onSubmit, resetError, isLoading, error}) => {
  const [form] = Form.useForm();
  const {t} = useTranslation();

  const onFinish = (values: reverifyReqBody) => {
    onSubmit(values);
  };

  return (
    <Form form={form} name="reverify" onFinish={onFinish} onChange={resetError} scrollToFirstError layout="vertical">
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

      <FormItem>
        <StyledButton variant="tertiary" htmlType="submit" loading={isLoading?.send}>
          {t(`auth:buttons.${titleButton}`)}
        </StyledButton>
      </FormItem>
      {error && <Label variant="error" label={error} icon />}
    </Form>
  );
};
