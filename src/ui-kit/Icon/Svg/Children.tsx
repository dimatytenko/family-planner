import React from 'react';

import {NotFound, Logo, EmojiAngry, EmojiWink} from './Paths';
import {StyledSvgIconProps} from './types';

export const SvgChildren: React.FC<StyledSvgIconProps> = ({type}) => {
  switch (type) {
    case 'notFound':
      return <NotFound />;
    case 'logo':
      return <Logo />;
    case 'emojiAngry':
      return <EmojiAngry />;
    case 'emojiWink':
      return <EmojiWink />;

    default:
      return null;
  }
};
