import React from 'react';

import {ModalProps} from './types';
import {StyledModal} from './styles';

export const Modal: React.FC<ModalProps> = ({open, title, footer, onCancel, children}) => {
  return (
    <StyledModal open={open} title={title} footer={footer} onCancel={onCancel}>
      {children}
    </StyledModal>
  );
};
