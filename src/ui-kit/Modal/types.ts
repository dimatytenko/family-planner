import {WithChildren} from '../../types/helpers';

export type ModalProps = WithChildren & {
  open: boolean;
  onCancel: () => void;
  title?: string;
  footer?: React.ReactNode;
};
