import React from 'react';
import type {BadgeProps} from 'antd';
import {Badge, Calendar, Alert} from 'antd';
import type {Dayjs} from 'dayjs';

import {CalendarPropsT} from '../../types/calendar';

export const CalendarComponent: React.FC<CalendarPropsT> = ({
  value,
  onSelect,
  onPanelChange,
  selectedValue,
  getListData,
  getMonthData,
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
    console.log('value', value.date());
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type as BadgeProps['status']} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <Alert message={`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`} />
      <Calendar
        value={value}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
      />
    </>
  );
};
