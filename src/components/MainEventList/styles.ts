import styled from 'styled-components';

import {Heading3} from '../../ui-kit/Typography';

export const Title = styled(Heading3)`
  margin-left: ${({theme}) => theme.spacer._2};
  margin-bottom: ${({theme}) => theme.spacer._3};
`;
