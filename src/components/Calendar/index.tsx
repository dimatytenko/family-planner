import {FC} from 'react';
import {BadgeProps, Skeleton, Badge} from 'antd';
import type {Dayjs} from 'dayjs';
import {useTranslation} from 'react-i18next';

import {CalendarPropsI} from '../../types/calendar';
import {
  CallendarWrapper,
  ButtonWrapper,
  FloatButtonCallendar,
  EventListWrapper,
  StyledCalendar,
  StyledPlusCircleOutlined,
} from './styles';
import {disabledDate} from '../../helpers/callendar';
import {EventList} from '../../components/EventList';
import {ItemTitle, InfoWrapper} from '../Common/styles';

export const CalendarComponent: FC<CalendarPropsI> = ({
  value,
  onSelect,
  onPanelChange,
  getListData,
  getMonthData,
  isLoading,
  goToPicker,
  selectedValue,
  events,
  deleteEvent,
  error,
  dellId,
}) => {
  const {t} = useTranslation();

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
    const listData = getListData(value, events);
    return (
      <ButtonWrapper className="events">
        {listData.map((item) => (
          <InfoWrapper key={item.id}>
            <Badge status={item.type as BadgeProps['status']} />
            <ItemTitle $isNone>{item?.content}</ItemTitle>
          </InfoWrapper>
        ))}
      </ButtonWrapper>
    );
  };

  if (isLoading?.page) return <Skeleton active />;

  return (
    <CallendarWrapper>
      <EventListWrapper>
        <EventList
          getListData={getListData}
          selectedValue={selectedValue}
          events={events}
          deleteEvent={deleteEvent}
          error={error}
          dellId={dellId}
        />
      </EventListWrapper>

      <StyledCalendar
        value={value}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
        disabledDate={disabledDate}
      />

      <FloatButtonCallendar
        onClick={goToPicker}
        text={t('common:buttons.addEvent')}
        icon={<StyledPlusCircleOutlined />}
      />
    </CallendarWrapper>
  );
};
