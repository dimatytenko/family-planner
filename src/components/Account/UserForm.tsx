import React from 'react';
import {Form} from 'antd';
import {useTranslation} from 'react-i18next';

import {IUserFormProps, USER} from '../../types/user';
import {getUserInfoField} from '../../helpers/user';
import {FormButtonsWrapper} from './styles';
import {Button} from '../../ui-kit/Button';
import {FormItem} from '../../ui-kit/Form/Form';
import {Input} from '../../ui-kit/Form/Input';
import {Select} from '../../ui-kit/Form/Select';
import {InputNumber} from '../../ui-kit/Form/InputNumber';

const genderItems = ['male', 'female'];

export const UserForm: React.FC<IUserFormProps> = ({
  userData: {onSubmit, resetError, error, isLoading},
  onChangeMode,
  userInfo,
}) => {
  const {t} = useTranslation();
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    onSubmit(values, onChangeMode);
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
      <FormItem name="name" label={t('account:forms.firstName')} initialValue={getUserInfoField(USER.name, userInfo)}>
        <Input />
      </FormItem>

      <FormItem
        name="lastName"
        label={t('account:forms.lastName')}
        initialValue={getUserInfoField(USER.lastName, userInfo)}>
        <Input />
      </FormItem>

      <FormItem
        name="username"
        label={t('account:forms.username')}
        rules={[{required: true, message: t('account:messages.usernameRequired'), whitespace: true}]}
        initialValue={getUserInfoField(USER.username, userInfo)}>
        <Input tooltip={t('account:notes.callYou')} />
      </FormItem>

      <FormItem
        name="email"
        label={t('account:forms.email')}
        rules={[
          {
            type: 'email',
            message: t('account:messages.emailFormat'),
          },
          {
            required: true,
            message: t('account:messages.emailRequired'),
          },
        ]}
        initialValue={getUserInfoField(USER.email, userInfo)}>
        <Input />
      </FormItem>

      <FormItem name="age" label={t('account:forms.age')} initialValue={getUserInfoField(USER.age, userInfo)}>
        <InputNumber size="small" min={1} max={99} />
      </FormItem>

      <FormItem name="sex" label={t('account:forms.gender')} initialValue={getUserInfoField(USER.sex, userInfo)}>
        <Select
          placeholder={t('account:messages.changeSex')}
          allowClear
          options={genderItems.map((item) => ({label: t(`account:fields.${item}`), value: item}))}></Select>
      </FormItem>

      <FormButtonsWrapper>
        <FormItem>
          <Button htmlType="submit" variant="success" loading={isLoading?.send}>
            {t('account:buttons.saveChanges')}
          </Button>
        </FormItem>
        <Button variant="secondary" onClick={onChangeMode}>
          {t('account:buttons.cancel')}
        </Button>
      </FormButtonsWrapper>
      {error && <div style={{color: 'red'}}>{error}</div>}
    </Form>
  );
};
