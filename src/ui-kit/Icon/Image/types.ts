export interface StyledIconProps {
  type?: IconTypes;
  alt?: string;
  width?: string;
  height?: string;
}

export const iconTypesList = <const>['notFound'];
export type IconTypes = (typeof iconTypesList)[number];
