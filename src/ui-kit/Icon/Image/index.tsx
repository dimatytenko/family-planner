import React from 'react';

import notFound from './assets/notFound.png';

import {Icon as SIcon} from './styles';
import {StyledIconProps} from './types';

const getSrc = (type?: string) => {
  switch (type) {
    case 'notFound':
      return notFound;
    default:
      return '';
  }
};

export const IconImage: React.FC<StyledIconProps> = ({type, alt, width, height}) => {
  if (!type) return null;
  return <SIcon src={getSrc(type)} width={width} height={height} alt={alt || 'Image'} />;
};
