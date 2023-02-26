import styled from 'styled-components';
import {defaultTheme} from '../../ui-kit/theme/theme';
import {Media} from '../../ui-kit/theme/breakpoints';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 ${defaultTheme.spacer._3};

  ${Media.up.m} {
    padding: 0 ${defaultTheme.spacer._5};
  }

  ${Media.up.l} {
    padding: 0 ${defaultTheme.spacer._15};
  }

  ${Media.up.xxxl} {
    width: 1920px;
  }
`;

export const Main = styled.main`
  padding: ${defaultTheme.spacer._6} 0;
  width: 100%;
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  background-color: gray;
`;

export const HeaderComponentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: ${defaultTheme.spacer._3} 0;
`;

export const Logo = styled.div``;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
