import React from 'react';
import {Button, Form, Input, Select, InputNumber} from 'antd';

const {Option} = Select;

import {IUserFormProps, USER} from '../../types/user';
import {getUserInfoField} from '../../helpers/user';
import {FormButtonsWrapper} from './styles';

export const UserForm: React.FC<IUserFormProps> = ({
  userData: {onSubmit, resetError, error, isLoading},
  onChangeMode,
  userInfo,
}) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    onSubmit(values, onChangeMode);
  };

  console.log('userInfo', userInfo);

  return (
    <Form
      form={form}
      name="register"
      onFinish={onFinish}
      onChange={resetError}
      scrollToFirstError
      layout="vertical"
      style={{maxWidth: 600}}>
      <Form.Item name="name" label="First Name" initialValue={getUserInfoField(USER.name, userInfo)}>
        <Input />
      </Form.Item>

      <Form.Item name="lastName" label="Last Name" initialValue={getUserInfoField(USER.lastName, userInfo)}>
        <Input />
      </Form.Item>

      <Form.Item
        name="username"
        label="Username"
        tooltip="What do you want others to call you?"
        rules={[{required: true, message: 'Please input your nickname!', whitespace: true}]}
        initialValue={getUserInfoField(USER.username, userInfo)}>
        <Input />
      </Form.Item>

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
        ]}
        initialValue={getUserInfoField(USER.email, userInfo)}>
        <Input />
      </Form.Item>

      <Form.Item name="age" label="Age" initialValue={getUserInfoField(USER.age, userInfo)}>
        <InputNumber size="large" min={1} max={99} />
      </Form.Item>

      <Form.Item name="sex" label="Gender" initialValue={getUserInfoField(USER.sex, userInfo)}>
        <Select placeholder="Select a option and change input text above" allowClear>
          <Option value="male">male</Option>
          <Option value="female">female</Option>
        </Select>
      </Form.Item>

      <FormButtonsWrapper>
        <Form.Item>
          <Button htmlType="submit" loading={isLoading?.send}>
            Save changes
          </Button>
        </Form.Item>
        <Button onClick={onChangeMode}>Сancel</Button>
      </FormButtonsWrapper>
      {error && <div style={{color: 'red'}}>{error}</div>}
    </Form>
  );
};
