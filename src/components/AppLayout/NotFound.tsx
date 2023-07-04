import {FC} from 'react';

import {BackButtonStyled, WrapperSVG} from './styles';
import {INotFoundProps} from '../../types/layout';
import {IconSvg} from '../../ui-kit/Icon/Svg';

export const NotFound: FC<INotFoundProps> = ({goBack}) => {
  return (
    <>
      <BackButtonStyled onClick={goBack} />
      <WrapperSVG>
        <IconSvg type="notFound" width="961" height="636" viewBox="0 0 961 636" />
      </WrapperSVG>
    </>
  );
};
