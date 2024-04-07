import styled from 'styled-components';

import {defaultTheme} from '../../ui-kit/theme/theme';
import {Media} from '../../ui-kit/theme/breakpoints';
import back from './assets/back-min.jpg';
import {StyledHeading5, TextSmall} from '../../ui-kit/Typography/styles';
import {CloseCircleOutlined} from '@ant-design/icons';
import {BackButton} from '../../ui-kit/Button';

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

export const Main = styled.main<{$isMobile?: boolean}>`
  padding-top: ${({$isMobile}) => ($isMobile ? defaultTheme.spacer._16 : defaultTheme.spacer._15)};
  padding-bottom: ${defaultTheme.spacer._5};
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
`;

export const HeaderComponentWrapper = styled.div<{$scrolled?: boolean; $isMobile?: boolean}>`
  position: fixed;
  z-index: 100;
  width: 100%;
  transition: all ${defaultTheme.transition.primary};
  padding-top: ${({$isMobile}) => ($isMobile ? defaultTheme.spacer._11 : defaultTheme.spacer._3)};
  // padding-top: ${({$isMobile}) => ($isMobile ? defaultTheme.spacer._3 : defaultTheme.spacer._3)};
  padding-bottom: ${defaultTheme.spacer._3};
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

// 404

export const BackButtonStyled = styled(BackButton)`
  margin-bottom: ${({theme}) => theme.spacer._3};
`;

export const WrapperSVG = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${Media.down.l} {
    & svg {
      width: 100%;
      height: 100%;
    }
  }
`;
// ======================

// footer

export const FooterComponentWrapper = styled.footer`
  padding: ${({theme}) => theme.spacer._8} 0;
  background-color: rgba(0, 0, 0, 0.8);
  min-height: 90px;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacer._1};
`;

export const TextCopy = styled(TextSmall)`
  color: ${({theme}) => theme.palette.colors.secondary};
  margin: 0 auto;
`;

export const TopBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

// ======================
