import styled from 'styled-components';

import {Button} from '../../ui-kit/Button';

export const FormWrapper = styled.div`
  max-width: 450px;
`;

export const StyledButton = styled(Button)`
  max-width: 200px;
`;

export const ButtonsWrapper = styled.div`
  max-width: 450px;
  display: flex;
  justify-content: space-between;
  gap: ${({theme}) => theme.spacer._1};

  margin-top: ${({theme}) => theme.spacer._1};
`;
