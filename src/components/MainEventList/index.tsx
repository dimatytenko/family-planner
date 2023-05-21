import React from 'react';
import {Empty} from 'antd';

import {EventList} from '../EventList';
import {MainEventListI} from '../../types/calendar';
import {Title, StyledEmpty, StyledLinkButton, EmptyDescription, EmptyWrapper} from './styles';
import {route} from '../../constants/routes';

export const MainEventList: React.FC<MainEventListI> = ({
  selectedValue,
  getListData,
  events,
  error,
  deleteEvent,
  dellId,
  isLoading,
}) => {
  console.log('isLoading?.page', isLoading?.page);
  if (isLoading?.page || !events) return null;

  return (
    <>
      <Title>Today`s events</Title>
      {!!events.length ? (
        <EventList
          selectedValue={selectedValue}
          getListData={getListData}
          events={events}
          error={error}
          deleteEvent={deleteEvent}
          dellId={dellId}
        />
      ) : (
        <EmptyWrapper>
          <StyledEmpty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            imageStyle={{height: 60}}
            description={<EmptyDescription>You have no events for today!</EmptyDescription>}
          />
          <StyledLinkButton variant="tertiary" to={route.picker.path}>
            Add event
          </StyledLinkButton>
        </EmptyWrapper>
      )}
    </>
  );
};
