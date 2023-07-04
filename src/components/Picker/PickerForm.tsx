import {FC} from 'react';
import {Form, Radio, Divider, Space, Segmented} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import dayjs from 'dayjs';
import {useTranslation} from 'react-i18next';

import {IPickerFormProps, SizeType} from '../../types/picker';
import {PickerValuesT} from '../../types/picker';
import {disabledDate, disabledDateTime} from '../../helpers/callendar';
import {ButtonsWrapper, DeleteIconWrapper, DeleteIcon, StyledButton, LabelWrapper} from './styles';
import {FormItem} from '../../ui-kit/Form/Form';
import {InputTextArea, Input} from '../../ui-kit/Form/Input';
import {Button} from '../../ui-kit/Button';
import {DatePicker} from '../../ui-kit/Form/DatePicker';
import {Select} from '../../ui-kit/Form/Select';
import {Label} from '../../ui-kit/Label';

export const PickerForm: FC<IPickerFormProps> = ({
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
  const {t} = useTranslation();
  const [form] = Form.useForm();

  const onFinish = (values: PickerValuesT) => {
    onSubmit(values);
    form.resetFields();
  };

  const onRemoveSelectItem = (value: string) => {
    removePickerItem(value);
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
      <FormItem label={t('forms:form.formSize')} name="size">
        <Radio.Group>
          <Radio.Button value="small">{t('forms:buttons.small')}</Radio.Button>
          <Radio.Button value="default">{t('forms:buttons.default')}</Radio.Button>
          <Radio.Button value="large">{t('forms:buttons.large')}</Radio.Button>
        </Radio.Group>
      </FormItem>

      <FormItem
        label={t('forms:form.date')}
        name="date"
        initialValue={initialValues?.date ? dayjs(initialValues?.date) : null}
        rules={[{required: true, message: t('forms:messages.dateRequired')}]}>
        <DatePicker
          disabledDate={disabledDate}
          disabledTime={disabledDateTime}
          format="YYYY-MM-DD HH:mm"
          showTime={{format: 'HH:mm'}}
        />
      </FormItem>

      <FormItem
        label={t('forms:form.event')}
        name="event"
        rules={[{required: true, message: t('forms:messages.eventRequired')}]}
        initialValue={initialValues?.event}>
        <Select
          placeholder={t('forms:form.addNewEvent')}
          onChange={onPickerItemChange}
          dropdownRender={(menu) => (
            <>
              {menu}
              <Divider style={{margin: '8px 0'}} />
              <Space style={{padding: '0 8px 4px'}}>
                <Input placeholder={t('forms:form.enterItem')} onChange={onNameChange} value={name} />
                <Button variant="success" icon={<PlusOutlined />} onClick={addItem}>
                  {t('forms:buttons.addItem')}
                </Button>
              </Space>
            </>
          )}
          options={pickerItems.map((item) => ({
            label: (
              <LabelWrapper>
                {item}
                <DeleteIconWrapper onClick={() => onRemoveSelectItem(item)}>
                  <DeleteIcon style={{color: 'red'}} />
                </DeleteIconWrapper>
              </LabelWrapper>
            ),
            value: item,
          }))}
        />
      </FormItem>

      <FormItem
        label={t('forms:form.description')}
        name="descr"
        initialValue={initialValues?.description}
        rules={[{required: true, message: t('forms:messages.requiredDescription')}]}>
        <InputTextArea
          showCount
          maxLength={200}
          style={{height: 120, marginBottom: 24}}
          placeholder={t('forms:form.enterDescription')}
        />
      </FormItem>

      <FormItem label={t('forms:form.repitability')} name="repeatability" initialValue={initialValues?.repeat}>
        <Segmented
          size="small"
          options={[
            {label: t('forms:buttons.oneTime'), value: 'one time'},
            {label: t('forms:buttons.daily'), value: 'daily'},
            {label: t('forms:buttons.weekly'), value: 'weekly'},
            {label: t('forms:buttons.monthly'), value: 'monthly'},
            {label: t('forms:buttons.yearly'), value: 'yearly'},
          ]}
        />
      </FormItem>

      <ButtonsWrapper>
        <FormItem>
          <StyledButton variant="success" htmlType="submit" loading={isLoading?.send}>
            {t('forms:buttons.send')}
          </StyledButton>
        </FormItem>
        {initialValues && (
          <StyledButton variant="secondary" htmlType="button" loading={isLoading?.delete} onClick={deleteEvent}>
            {t('forms:buttons.delete')}
          </StyledButton>
        )}
      </ButtonsWrapper>
      {error && <Label variant="error" label={error} icon />}
    </Form>
  );
};
