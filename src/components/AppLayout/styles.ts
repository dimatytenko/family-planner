import styled from 'styled-components';
import {defaultTheme} from '../../ui-kit/theme/theme';
import {Media} from '../../ui-kit/theme/breakpoints';

export const MainWrapper = styled.main.attrs({className: 'page-content'})`
  width: 100%;
  max-width: 1224px;
  height: 100%;
  box-sizing: border-box;
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 ${defaultTheme.spacer._3};

  ${Media.up.m} {
    padding: 0 ${defaultTheme.spacer._5} ${defaultTheme.spacer._5} ${defaultTheme.spacer._5};
  }

  ${Media.up.l} {
    padding: 0 ${defaultTheme.spacer._15} ${defaultTheme.spacer._5} ${defaultTheme.spacer._15};
  }

  ${Media.up.xxxl} {
    width: 1920px;
  }
`;
