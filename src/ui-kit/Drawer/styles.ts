import styled from 'styled-components';
import {Drawer} from 'antd';

export const StyledDrawer = styled(Drawer)<{$isMobile?: boolean}>`
  & .ant-drawer-header {
    padding-top: ${({$isMobile, theme}) => ($isMobile ? theme.spacer._11 : theme.spacer._3)};
    padding-bottom: ${({theme}) => theme.spacer._3};
    box-shadow: ${({theme}) => theme.palette.shadows.primary};
  }

  & .ant-drawer-close {
    color: ${({theme}) => theme.palette.colors.primary};
  }
`;
