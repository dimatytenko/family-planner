import styled from 'styled-components';

import {defaultTheme} from '../../ui-kit/theme/theme';
import {Media} from '../../ui-kit/theme/breakpoints';
import back from './assets/back-min.jpg';
import {StyledHeading5} from '../../ui-kit/Typography/styles';
import {CloseCircleOutlined} from '@ant-design/icons';

export const StyledLayout = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: url(${back}) repeat;
`;

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
  padding: ${defaultTheme.spacer._15} 0;
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
`;

export const HeaderComponentWrapper = styled.div<{$scrolled?: boolean}>`
  position: fixed;
  z-index: 100;
  width: 100%;
  transition: all ${defaultTheme.transition.primary};
  padding: ${defaultTheme.spacer._3} 0;
  ${({$scrolled}) =>
    $scrolled &&
    `
    border-bottom: 1px solid ${defaultTheme.palette.colors.lightGray};
    background-color: rgba(0, 0, 0, 0.8);
    box-shadow: ${defaultTheme.palette.shadows.primary};
    `}
`;

export const Logo = styled.div``;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// drawer
export const Drawerlist = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacer._3};
`;

export const DrawerElWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${defaultTheme.spacer._2};
`;

export const StyledLogout = styled.div`
  cursor: pointer;
  margin: 0;
  & > span {
    display: block;
  }

  & svg {
    font-size: 0;
    width: 34px;
    height: 34px;
    color: ${defaultTheme.palette.colors.primary};
    transition: color ${defaultTheme.transition.primary};
  }

  &:hover svg {
    color: ${defaultTheme.palette.colors.alert};
  }
`;

export const DrawerTitle = styled(StyledHeading5)``;

export const StyledClose = styled(CloseCircleOutlined)`
  font-size: 20px;
`;
