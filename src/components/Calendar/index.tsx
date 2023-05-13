import React from 'react';
import {BadgeProps, Skeleton, Button, Badge, Calendar, Alert} from 'antd';
import type {Dayjs} from 'dayjs';

import {CalendarPropsT} from '../../types/calendar';
import {ButtonWrapper, DisplayText, EventsList, EventEditLink, EventsItem, EditIcon, DeleteIcon} from './styles';
import {route} from '../../constants/routes';
import {disabledDate} from '../../helpers/callendar';

export const CalendarComponent: React.FC<CalendarPropsT> = ({
  value,
  onSelect,
  onPanelChange,
  selectedValue,
  getListData,
  getMonthData,
  isLoading,
  deleteEvent,
  error,
  dellId,
}) => {
  console.log('dellId', dellId);
  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
      <ButtonWrapper className="events">
        {listData.map((item) => (
          <Badge
            key={item.id}
            status={item.type as BadgeProps['status']}
            text={<DisplayText>{item?.content}</DisplayText>}
          />
        ))}
      </ButtonWrapper>
    );
  };

  const currentDateRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
      <>
        <EventsList className="events">
          {listData.map((item) => (
            <EventsItem key={item.id}>
              <EventEditLink to={route.pickerEdit.get({id: item.id})}>
                <Badge status={item.type as BadgeProps['status']} text={item?.content} />
                <EditIcon />
              </EventEditLink>
              <Button
                type="text"
                onClick={() => deleteEvent?.(item.id)}
                icon={<DeleteIcon />}
                loading={dellId === item.id}
              />
            </EventsItem>
          ))}
        </EventsList>
        {error && <div style={{color: 'red'}}>{error}</div>}
      </>
    );
  };

  if (isLoading?.page) return <Skeleton active />;

  return (
    <>
      <Alert message={currentDateRender(selectedValue)} />

      <Calendar
        value={value}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
        disabledDate={disabledDate}
      />
    </>
  );
};
