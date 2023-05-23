import React from 'react';
import {Empty} from 'antd';

import {StyledEmpty, StyledLinkButton, EmptyDescription, EmptyWrapper} from './styles';

export const EmptyComponent: React.FC<{description?: string | null; titleButton?: string; to?: string}> = ({
  description,
  titleButton,
  to,
}) => {
  return (
    <EmptyWrapper>
      <StyledEmpty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        imageStyle={{height: 60}}
        description={<EmptyDescription>{description || ''}</EmptyDescription>}
      />
      {titleButton && to && (
        <StyledLinkButton variant="tertiary" to={to}>
          {titleButton}
        </StyledLinkButton>
      )}
    </EmptyWrapper>
  );
};
