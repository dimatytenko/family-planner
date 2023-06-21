import styled from 'styled-components';

import {Media} from '../../ui-kit/theme/breakpoints';

export const MainEventListWrapper = styled.div``;

export const EventListBody = styled.div`
  max-width: 767px;

  ${Media.down.m} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const EventListWrapper = styled.div`
  width: 100%;
  max-width: 450px;
`;
