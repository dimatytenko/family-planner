export interface INote {
  id: string;
  content: string;
}

export interface INoteModalProps {
  noteModal: boolean;
  colorState: number;
  onChengeColorState: (color: number) => void;
  isHiddenColors: boolean;
  setIsHiddenColors: (v: boolean) => void;
  coord: {x: number; y: number} | null;
  onDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd: (e: React.DragEvent<HTMLDivElement>) => void;
  value: string;
  onChangeValue: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  noteModalHandler: () => void;
  refNote: React.RefObject<HTMLDivElement>;
  placeholder: string;
}
