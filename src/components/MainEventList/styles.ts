import styled from 'styled-components';
import {Empty} from 'antd';

import {Heading3, HeadingMedium3} from '../../ui-kit/Typography';
import {LinkButton} from '../../ui-kit/Button';

export const Title = styled(Heading3)`
  margin-left: ${({theme}) => theme.spacer._2};
  margin-bottom: ${({theme}) => theme.spacer._3};
`;

export const EmptyWrapper = styled.div`
  width: fit-content;
  padding: ${({theme}) => theme.spacer._3} ${({theme}) => theme.spacer._9};
  margin: 0 auto;
  border-radius: ${({theme}) => theme.spacer._3};
  background-color: ${({theme}) => theme.palette.colors.secondary};
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
