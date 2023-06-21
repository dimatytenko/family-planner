import React from 'react';
import {Form} from 'antd';

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
      <FormItem name="name" label="First Name" initialValue={getUserInfoField(USER.name, userInfo)}>
        <Input />
      </FormItem>

      <FormItem name="lastName" label="Last Name" initialValue={getUserInfoField(USER.lastName, userInfo)}>
        <Input />
      </FormItem>

      <FormItem
        name="username"
        label="Username"
        rules={[{required: true, message: 'Please input your nickname!', whitespace: true}]}
        initialValue={getUserInfoField(USER.username, userInfo)}>
        <Input tooltip="What do you want others to call you?" />
      </FormItem>

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
        ]}
        initialValue={getUserInfoField(USER.email, userInfo)}>
        <Input />
      </FormItem>

      <FormItem name="age" label="Age" initialValue={getUserInfoField(USER.age, userInfo)}>
        <InputNumber size="small" min={1} max={99} />
      </FormItem>

      <FormItem name="sex" label="Gender" initialValue={getUserInfoField(USER.sex, userInfo)}>
        <Select
          placeholder="Select a option and change input text above"
          allowClear
          options={genderItems.map((item) => ({label: item, value: item}))}></Select>
      </FormItem>

      <FormButtonsWrapper>
        <FormItem>
          <Button htmlType="submit" variant="success" loading={isLoading?.send}>
            Save changes
          </Button>
        </FormItem>
        <Button variant="secondary" onClick={onChangeMode}>
          Сancel
        </Button>
      </FormButtonsWrapper>
      {error && <div style={{color: 'red'}}>{error}</div>}
    </Form>
  );
};
