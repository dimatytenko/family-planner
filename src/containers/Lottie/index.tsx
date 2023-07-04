import {useLottie} from 'lottie-react';

import plan from '../../files/plan.json';

export const Lottie = () => {
  const options = {
    animationData: plan,
    loop: true,
    style: {
      margin: '0 auto',
      maxWidth: '600px',
    },
  };

  const {View} = useLottie(options);

  return <>{View}</>;
};
