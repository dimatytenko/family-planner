import React from 'react';
import {Skeleton} from 'antd';

import {BackButtonStyled} from './styles';
import {SpaceForm} from './SpaceForm';
import {SpacePropsT} from '../../types/space';

export const Space: React.FC<SpacePropsT> = ({isLoading, initialValues, formActions, goBack}) => {
  if (isLoading?.page || !formActions.sizeForm) return <Skeleton active />;

  return (
    <>
      <BackButtonStyled onClick={goBack} />
      <SpaceForm isLoading={isLoading} initialValues={initialValues} formActions={formActions} />
    </>
  );
};
