export const variantOptions = <const>['primary', 'tertiary', 'error'];
export type LabelVariant = (typeof variantOptions)[number];

export type LabelProps = {
  variant: LabelVariant;
  label: string;
  icon?: boolean;
};

export type StyledLabelPropsT = {
  variant: LabelVariant;
};
