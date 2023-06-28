import React from 'react';
import {useTranslation} from 'react-i18next';

import {EventList} from '../EventList';
import {MainEventListI} from '../../types/calendar';
import {Title} from '../../styles/common';
import {EmptyComponent} from '../../ui-kit/Empty';
import {route} from '../../constants/routes';
import {MainEventListWrapper, EventListBody, EventListWrapper} from './styles';

export const MainEventList: React.FC<MainEventListI> = ({
  selectedValue,
  getListData,
  events,
  error,
  deleteEvent,
  dellId,
  isLoading,
}) => {
  const {t} = useTranslation();

  if (isLoading?.page || !events) return null;

  const listData = getListData(selectedValue, events);

  return (
    <MainEventListWrapper>
      <Title>{t('common:titles.commonEvents')}</Title>
      <EventListBody>
        {!!listData.length ? (
          <EventListWrapper>
            <EventList
              selectedValue={selectedValue}
              getListData={getListData}
              events={events}
              error={error}
              deleteEvent={deleteEvent}
              dellId={dellId}
            />
          </EventListWrapper>
        ) : (
          <EmptyComponent
            description={t('common:messages.noEvents')}
            titleButton={t('common:buttons.addEvent')}
            to={route.picker.path}
          />
        )}
      </EventListBody>
    </MainEventListWrapper>
  );
};
