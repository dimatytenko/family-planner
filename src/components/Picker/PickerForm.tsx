import React from 'react';
import {Button, DatePicker, Form, Radio, Select, Input, Divider, Space} from 'antd';
import {PlusOutlined, CloseOutlined} from '@ant-design/icons';
import dayjs from 'dayjs';

import {IPickerFormProps, SizeType} from '../../types/picker';
import {PickerValuesT} from '../../types/picker';
import {disabledDate, disabledDateTime} from '../../helpers/callendar';
import {ButtonsWrapper} from './styles';

const {TextArea} = Input;

export const PickerForm: React.FC<IPickerFormProps> = ({
  isLoading,
  initialValues,
  formActions: {
    onNameChange,
    addItem,
    name,
    onSubmit,
    onFormLayoutChange,
    onPickerItemChange,
    resetError,
    error,
    sizeForm,
    pickerItems,
    removePickerItem,
    deleteEvent,
  },
}) => {
  const [form] = Form.useForm();

  const onFinish = (values: PickerValuesT) => {
    console.log('values', values);
    onSubmit(values);
    form.resetFields();
  };

  const onRemoveSelectItem = () => {
    removePickerItem();
    form.setFieldValue('event', '');
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      onChange={resetError}
      layout="vertical"
      initialValues={{size: sizeForm}}
      onValuesChange={onFormLayoutChange}
      size={sizeForm as SizeType}
      style={{maxWidth: 600}}>
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        label="Date"
        name="date"
        initialValue={initialValues?.date ? dayjs(initialValues?.date) : null}
        rules={[{required: true, message: 'Date is required!'}]}>
        <DatePicker disabledDate={disabledDate} disabledTime={disabledDateTime} showTime />
      </Form.Item>

      <Form.Item
        label="Event"
        name="event"
        rules={[{required: true, message: 'Event is required!'}]}
        initialValue={initialValues?.event}>
        <Select
          style={{maxWidth: 300}}
          placeholder="choose or add new event"
          onChange={onPickerItemChange}
          dropdownRender={(menu) => (
            <>
              {menu}
              <Divider style={{margin: '8px 0'}} />
              <Space style={{padding: '0 8px 4px'}}>
                <Input placeholder="Please enter item" onChange={onNameChange} value={name} />
                <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                  Add item
                </Button>
              </Space>
            </>
          )}
          options={pickerItems.map((item) => ({label: item, value: item}))}
        />
      </Form.Item>
      <Button type="primary" htmlType="button" onClick={onRemoveSelectItem} icon={<CloseOutlined />}></Button>

      <Form.Item
        label="Description"
        name="descr"
        initialValue={initialValues?.description}
        rules={[{required: true, message: 'Description is required!'}]}>
        <TextArea
          showCount
          maxLength={200}
          style={{height: 120, marginBottom: 24}}
          placeholder="enter a description... "
        />
      </Form.Item>

      <Form.Item label="Repeatability" name="repeatability" initialValue={initialValues?.repeat}>
        <Select
          style={{maxWidth: 300}}
          placeholder="Select repeatability"
          options={[
            {
              value: '',
              label: 'one time',
            },
            {
              value: 'daily',
              label: 'daily',
            },
            {
              value: 'weekly',
              label: 'weekly',
            },
            {
              value: 'monthly',
              label: 'monthly',
            },
            {
              value: 'yearly',
              label: 'yearly',
            },
          ]}
        />
      </Form.Item>

      <ButtonsWrapper>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading?.send}>
            Send
          </Button>
        </Form.Item>
        {initialValues && (
          <Button type="primary" htmlType="button" loading={isLoading?.delete} onClick={deleteEvent}>
            Delete
          </Button>
        )}
      </ButtonsWrapper>
      {error && <div style={{color: 'red'}}>{error}</div>}
    </Form>
  );
};
