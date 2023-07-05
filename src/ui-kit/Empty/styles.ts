import styled from 'styled-components';
import {Empty} from 'antd';

import {HeadingMedium3} from '../../ui-kit/Typography';
import {LinkButton} from '../../ui-kit/Button';
import {Media} from '../../ui-kit/theme/breakpoints';

export const EmptyWrapper = styled.div`
  width: 375px;
  padding: ${({theme}) => theme.spacer._3} ${({theme}) => theme.spacer._9};
  border-radius: ${({theme}) => theme.spacer._3};
  background-color: ${({theme}) => theme.palette.colors.secondary};

  ${Media.down.xxs} {
    width: 100%;
  }
`;

export const StyledEmpty = styled(Empty)``;

export const EmptyDescription = styled(HeadingMedium3)`
  color: ${({theme}) => theme.palette.colors.denary};
`;

export const AddButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({theme}) => theme.spacer._3};
`;

export const StyledLinkButton = styled(LinkButton)`
  max-width: 200px;
  margin: 0 auto;
  margin-bottom: ${({theme}) => theme.spacer._3};
`;
