import {FC} from 'react';
import {Form} from 'antd';
import {MinusCircleOutlined} from '@ant-design/icons';
import {useTranslation} from 'react-i18next';

import {SizeType} from '../../types/picker';
import {ButtonsWrapper, StyledButton, GhostWrapperStyled, ItemsInputWrapper, InputWrapper} from './styles';
import {FormItem} from '../../ui-kit/Form/Form';
import {Input} from '../../ui-kit/Form/Input';
import {Label} from '../../ui-kit/Label';
import {ITaskFormProps, TaskValuesT} from '../../types/task';
import {Select} from '../../ui-kit/Form/Select';
import {TASK_STATUSES} from '../../queries/types/task';
import {StyledDoneItemIcon, StyledTodoItemIcon} from '../Common/styles';

export const TaskForm: FC<ITaskFormProps> = ({
  isLoading,
  initialAssignee,
  initialValues,
  formActions: {onSubmit, resetError, error, sizeForm, deleteTask},
}) => {
  const {t} = useTranslation();
  const [form] = Form.useForm();

  const onFinish = (values: TaskValuesT) => {
    onSubmit(values);
    form.resetFields();
  };

  const itemsStatuses = initialValues
    ? [TASK_STATUSES.TODO, TASK_STATUSES.IN_PROGRESS, TASK_STATUSES.DONE]
    : [TASK_STATUSES.TODO];

  const initItems = initialValues?.items?.map((item) => item.name);

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
        label={t('forms:form.task')}
        initialValue={initialValues?.name}
        rules={[{required: true, message: t('forms:messages.taskRequired')}]}>
        <Input />
      </FormItem>

      <FormItem
        name="status"
        label={t('forms:form.status')}
        initialValue={initialValues ? initialValues.status : TASK_STATUSES.TODO}
        rules={[{required: true, message: t('forms:messages.statusRequired')}]}>
        <Select
          placeholder={t('forms:form.status')}
          options={itemsStatuses.map((item) => ({
            label: t(`common:buttons.${item}`),
            value: item,
          }))}
        />
      </FormItem>

      <FormItem
        name="assignee"
        label={t('forms:form.assignee')}
        rules={[{required: true, message: t('forms:messages.assigneeRequired')}]}
        initialValue={initialValues?.assignee?.username}>
        <Select
          placeholder={t('forms:form.assignee')}
          options={initialAssignee?.map((item) => ({
            label: item.username,
            value: item.username,
          }))}
        />
      </FormItem>

      <Form.List name="items" initialValue={initItems}>
        {(fields, {add, remove}) => (
          <>
            {fields.map((field, index) => (
              <ItemsInputWrapper key={field.key}>
                <FormItem label={index === 0 ? t('forms:form.items') : ''} required={false}>
                  <InputWrapper>
                    <FormItem
                      {...field}
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message: t('forms:messages.inputItemText'),
                        },
                      ]}
                      noStyle>
                      <Input
                        icon={
                          initialValues?.items?.[field.key]?.status ? <StyledDoneItemIcon /> : <StyledTodoItemIcon />
                        }
                        placeholder={t('forms:form.enterItemText')}
                      />
                    </FormItem>
                    {
                      <GhostWrapperStyled>
                        <MinusCircleOutlined onClick={() => remove(field.name)} />
                      </GhostWrapperStyled>
                    }
                  </InputWrapper>
                </FormItem>
              </ItemsInputWrapper>
            ))}
            <FormItem>
              <StyledButton onClick={() => add()}>{t('forms:buttons.addItem')}</StyledButton>
            </FormItem>
          </>
        )}
      </Form.List>

      <ButtonsWrapper>
        <FormItem>
          <StyledButton variant="success" htmlType="submit" loading={isLoading?.send}>
            {t('forms:buttons.send')}
          </StyledButton>
        </FormItem>
        {initialValues && (
          <FormItem>
            <StyledButton variant="secondary" htmlType="button" loading={isLoading?.delete} onClick={deleteTask}>
              {t('forms:buttons.delete')}
            </StyledButton>
          </FormItem>
        )}
      </ButtonsWrapper>
      {error && <Label variant="error" label={error} icon />}
    </Form>
  );
};
