import styled from 'styled-components';
import {Drawer} from 'antd';

export const StyledDrawer = styled(Drawer)`
  & .ant-drawer-header {
    min-height: 70px;
    box-shadow: ${({theme}) => theme.palette.shadows.primary};
  }
`;
