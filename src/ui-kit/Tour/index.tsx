import {Tour as AntdTour} from 'antd';
import type {TourProps} from 'antd';

export const Tour = (props: TourProps) => {
  return <AntdTour arrow={false} {...props} />;
};
