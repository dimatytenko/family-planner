import {FC} from 'react';
import type {Dayjs} from 'dayjs';

import {EventListPropsI} from '../../types/calendar';
import {EventsList} from './styles';
import {Item} from '../Common/Item';
import {Label} from '../../ui-kit/Label';
import {ITEM_TYPES} from '../../types/common';

export const EventList: FC<EventListPropsI> = ({selectedValue, getListData, events, deleteEvent, error, dellId}) => {
  const currentDateRender = (value: Dayjs) => {
    const listData = getListData(value, events);
    if (!listData.length) return;
    return (
      <>
        <EventsList className="events">
          {listData.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              title={item.content}
              type={item.type}
              descr={item.description}
              deleteItem={deleteEvent}
              dellId={dellId}
              item={ITEM_TYPES.EVENT}
            />
          ))}
        </EventsList>
        {error && <Label variant="error" label={error} icon />}
      </>
    );
  };

  const currentList = currentDateRender(selectedValue);
  return <>{currentList}</>;
};
