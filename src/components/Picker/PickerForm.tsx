import React from 'react';
import {Form, Radio, Divider, Space, Segmented} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import dayjs from 'dayjs';

import {IPickerFormProps, SizeType} from '../../types/picker';
import {PickerValuesT} from '../../types/picker';
import {disabledDate, disabledDateTime} from '../../helpers/callendar';
import {ButtonsWrapper, DatePickerStyled, DeleteIconWrapper, DeleteIcon} from './styles';
import {GhostWrapper} from '../../ui-kit/Button';
import {FormItem} from '../../ui-kit/Form/Form';
import {InputTextArea, Select, Input} from '../../ui-kit/Form/Input';
import {Button} from '../../ui-kit/Button';

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
      style={{maxWidth: 450}}>
      <FormItem label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </FormItem>

      <FormItem
        label="Date"
        name="date"
        initialValue={initialValues?.date ? dayjs(initialValues?.date) : null}
        rules={[{required: true, message: 'Date is required!'}]}>
        <DatePickerStyled
          disabledDate={disabledDate}
          disabledTime={disabledDateTime}
          format="YYYY-MM-DD HH:mm"
          showTime={{format: 'HH:mm'}}
        />
      </FormItem>

      <FormItem
        label="Event"
        name="event"
        rules={[{required: true, message: 'Event is required!'}]}
        initialValue={initialValues?.event}>
        <Select
          placeholder="choose or add new event"
          onChange={onPickerItemChange}
          dropdownRender={(menu) => (
            <>
              {menu}
              <Divider style={{margin: '8px 0'}} />
              <Space style={{padding: '0 8px 4px'}}>
                <Input placeholder="Please enter item" onChange={onNameChange} value={name} />
                <Button variant="success" icon={<PlusOutlined />} onClick={addItem}>
                  Add item
                </Button>
                <GhostWrapper onClick={onRemoveSelectItem} round>
                  <DeleteIconWrapper>
                    <DeleteIcon style={{color: 'red'}} />
                  </DeleteIconWrapper>
                </GhostWrapper>
              </Space>
            </>
          )}
          options={pickerItems.map((item) => ({label: item, value: item}))}
        />
      </FormItem>

      <FormItem
        label="Description"
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

      <FormItem label="Repeatability" name="repeatability" initialValue={initialValues?.repeat}>
        <Segmented size="small" options={['one time', 'daily', 'weekly', 'monthly', 'yearly']} />
      </FormItem>

      <ButtonsWrapper>
        <FormItem>
          <Button variant="success" htmlType="submit" loading={isLoading?.send}>
            Send
          </Button>
        </FormItem>
        {initialValues && (
          <Button variant="secondary" htmlType="button" loading={isLoading?.delete} onClick={deleteEvent}>
            Delete
          </Button>
        )}
      </ButtonsWrapper>
      {error && <div style={{color: 'red'}}>{error}</div>}
    </Form>
  );
};
