import {atom} from 'recoil';

export const NoteModalState = atom<boolean>({
  key: 'noteModal',
  default: false,
});
