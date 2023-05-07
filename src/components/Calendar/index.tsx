import React from 'react';
import {BadgeProps, Skeleton} from 'antd';
import {Badge, Calendar, Alert} from 'antd';
import type {Dayjs} from 'dayjs';

import {Link} from 'react-router-dom';

import {CalendarPropsT} from '../../types/calendar';
import {ButtonWrapper} from './styles';
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
}) => {
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
          <Link key={item.id} to={route.pickerEdit.get({id: item.id})}>
            <Badge status={item.type as BadgeProps['status']} text={item.content} />
          </Link>
        ))}
      </ButtonWrapper>
    );
  };

  if (isLoading?.page) return <Skeleton active />;

  return (
    <>
      <Alert message={`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`} />
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
