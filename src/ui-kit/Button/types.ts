export const variantOptions = <const>[
  'primary',
  'secondary',
  'success',
  'tertiary',
  // 'warning',
  // 'custom',
  // 'select',
  // 'social',
];
export type ButtonVariant = (typeof variantOptions)[number];

export type CustomButtonProps = {
  theme?: any;
  variant?: ButtonVariant;
  loading?: boolean;
  onClick?: (value: any) => void;
  round?: boolean;
  black?: boolean;
  disabled?: boolean;
};
