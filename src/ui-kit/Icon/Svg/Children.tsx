import React from 'react';

import {NotFound, Logo} from './Paths';
import {StyledSvgIconProps} from './types';

export const SvgChildren: React.FC<StyledSvgIconProps> = ({type}) => {
  switch (type) {
    case 'notFound':
      return <NotFound />;
    case 'logo':
      return <Logo />;

    default:
      return null;
  }
};
