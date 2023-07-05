import {FC} from 'react';

import {SpaceFormWrapper, BackButtonStyled} from './styles';
import {SpaceForm} from './SpaceForm';
import {SpacePropsT} from '../../types/space';

export const Space: FC<SpacePropsT> = ({isLoading, initialValues, formActions, goBack}) => {
  return (
    <SpaceFormWrapper>
      <BackButtonStyled onClick={goBack} />
      <SpaceForm isLoading={isLoading} initialValues={initialValues} formActions={formActions} />
    </SpaceFormWrapper>
  );
};
