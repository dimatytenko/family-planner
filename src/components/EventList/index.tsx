import React from 'react';
import {Badge, BadgeProps} from 'antd';
import type {Dayjs} from 'dayjs';

import {EventListPropsI} from '../../types/calendar';
import {EventsList, EventEditLink, EventsItem, EditIcon, DeleteIcon, InfoIcon, InfoWrapper, EventTitle} from './styles';
import {route} from '../../constants/routes';
import {GhostWrapper} from '../../ui-kit/Button';
import {Tooltip} from '../../ui-kit/Tooltip';
import {Popconfirm} from '../../ui-kit/Popconfirm';

const text = 'Are you sure to delete this event?';
const description = 'Delete the event';

export const EventList: React.FC<EventListPropsI> = ({
  selectedValue,
  getListData,
  events,
  deleteEvent,
  error,
  dellId,
}) => {
  const confirm = (id: string) => {
    deleteEvent?.(id);
  };

  const currentDateRender = (value: Dayjs) => {
    const listData = getListData(value, events);
    if (!listData.length) return;
    return (
      <>
        <EventsList className="events">
          {listData.map((item) => (
            <EventsItem key={item.id}>
              <Tooltip placement="bottomLeft" text={item.description}>
                <GhostWrapper>
                  <InfoWrapper>
                    <Badge status={item.type as BadgeProps['status']} />
                    <EventTitle>{item?.content}</EventTitle>
                    <InfoIcon />
                  </InfoWrapper>
                </GhostWrapper>
              </Tooltip>
              <EventEditLink to={route.pickerEdit.get({id: item.id})}>
                <GhostWrapper>
                  <EditIcon />
                </GhostWrapper>
              </EventEditLink>

              <Popconfirm
                placement="bottom"
                title={text}
                description={description}
                onConfirm={() => confirm?.(item.id)}>
                <GhostWrapper loading={dellId === item.id}>
                  <DeleteIcon />
                </GhostWrapper>
              </Popconfirm>
            </EventsItem>
          ))}
        </EventsList>
        {error && <div style={{color: 'red'}}>{error}</div>}
      </>
    );
  };

  const currentList = currentDateRender(selectedValue);
  return <>{currentList}</>;
};
