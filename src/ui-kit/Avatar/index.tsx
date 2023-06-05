import React from 'react';
import {Avatar as AntdAvatar} from 'antd';

import {AvatarButton} from './styles';
import {AvatarProps} from './types';

export const Avatar: React.FC<AvatarProps> = ({onClick, src, size, ...props}) => {
  return (
    <AvatarButton onClick={onClick}>
      <AntdAvatar src={src} size={size} {...props} />
    </AvatarButton>
  );
};
