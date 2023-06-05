import React from 'react';
import {Form} from 'antd';
import {MinusCircleOutlined} from '@ant-design/icons';

import {SizeType} from '../../types/picker';
import {ButtonsWrapper, StyledButton, GhostWrapperStyled, InputWrapper, UsernamesInputWrapper} from './styles';
import {FormItem} from '../../ui-kit/Form/Form';
import {InputTextArea, Input} from '../../ui-kit/Form/Input';
import {Label} from '../../ui-kit/Label';
import {ISpaceFormProps, SpaceValuesT} from '../../types/space';

export const SpaceForm: React.FC<ISpaceFormProps> = ({
  isLoading,
  initialValues,
  formActions: {onSubmit, resetError, error, sizeForm, deleteSpace},
}) => {
  const [form] = Form.useForm();

  const onFinish = (values: SpaceValuesT) => {
    onSubmit(values);
    form.resetFields();
  };

  console.log('initialValues', initialValues?.name);

  const initUsers = initialValues?.users.map((user) => user.username);

  return (
    <Form
      form={form}
      onFinish={onFinish}
      onChange={resetError}
      layout="vertical"
      initialValues={{size: sizeForm}}
      size={sizeForm as SizeType}
      style={{maxWidth: 450}}>
      <FormItem
        name="name"
        label="Space Name"
        initialValue={initialValues?.name}
        rules={[{required: true, message: 'Name space is required!'}]}>
        <Input />
      </FormItem>

      <FormItem
        label="Space Description"
        name="descr"
        initialValue={initialValues?.description}
        rules={[{required: true, message: 'Description is required!'}]}>
        <InputTextArea
          showCount
          maxLength={200}
          style={{height: 120, marginBottom: 24}}
          placeholder="enter a description... "
        />
      </FormItem>

      {initialValues && (
        <Form.List name="usernames" initialValue={initUsers}>
          {(fields, {add, remove}) => (
            <>
              {fields.map((field, index) => (
                <UsernamesInputWrapper key={field.key}>
                  <FormItem label={index === 0 ? 'Participants' : ''} required={false}>
                    <InputWrapper>
                      <FormItem
                        {...field}
                        validateTrigger={['onChange', 'onBlur']}
                        initialValue={initUsers && initUsers[index]}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message: 'Please input username or delete this field.',
                          },
                        ]}
                        noStyle>
                        <Input placeholder="enter a username..." />
                      </FormItem>
                      {
                        <GhostWrapperStyled>
                          <MinusCircleOutlined onClick={() => remove(field.name)} />
                        </GhostWrapperStyled>
                      }
                    </InputWrapper>
                  </FormItem>
                </UsernamesInputWrapper>
              ))}
              <FormItem>
                <StyledButton onClick={() => add()}>Add participant</StyledButton>
              </FormItem>
            </>
          )}
        </Form.List>
      )}

      <ButtonsWrapper>
        <FormItem>
          <StyledButton variant="success" htmlType="submit" loading={isLoading?.send}>
            Send
          </StyledButton>
        </FormItem>
        {initialValues && (
          <StyledButton variant="secondary" htmlType="button" loading={isLoading?.delete} onClick={deleteSpace}>
            Delete
          </StyledButton>
        )}
      </ButtonsWrapper>
      {error && <Label variant="error" label={error} icon />}
    </Form>
  );
};
