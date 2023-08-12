import {FC} from 'react';

import {StyledSwitch} from './styles';
import {SwitchPropsT} from './types';

export const Switch: FC<SwitchPropsT> = ({checkedChildren, unCheckedChildren, ...props}) => {
  return <StyledSwitch checkedChildren={checkedChildren} unCheckedChildren={unCheckedChildren} {...props} />;
};
