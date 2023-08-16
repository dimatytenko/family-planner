import {useState, useRef, useEffect} from 'react';
import {useDebounce} from 'react-use';
import {useRecoilState} from 'recoil';

import {NoteModalState} from '../states/noteModal';
import {getNoteQuery, createNoteQuery, updateNoteQuery} from '../queries/note';
import {useViewer} from './user';

export const useNoteModal = () => {
  const [noteModal, setNoteModal] = useRecoilState(NoteModalState);
  const [colorState, setColorState] = useState<number>(0);
  const [isHiddenColors, setIsHiddenColors] = useState(true);
  const [coord, setCoord] = useState<{x: number; y: number} | null>(null);
  const [startCoord, setStartCoord] = useState<{x: number; y: number} | null>(null);
  const [value, setValue] = useState('');
  const user = useViewer();
  const refNote = useRef<HTMLDivElement>(null);

  const onChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    cancel();
  };

  const [, cancel] = useDebounce(
    () => {
      updateNote();
    },
    2000,
    [value],
  );

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    setStartCoord({x: e.clientX, y: e.clientY});
  };

  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    const rect = refNote?.current?.getBoundingClientRect() as DOMRect;

    const left = rect.left + (e.clientX - (startCoord?.x || 0));
    const top = rect.top + (e.clientY - (startCoord?.y || 0));

    setCoord({x: left, y: top});
  };

  const noteModalHandler = () => {
    setNoteModal((prev: boolean) => !prev);
    localStorage.setItem('noteModal', JSON.stringify(!noteModal));
  };

  const onChengeColorState = (color: number) => {
    setColorState(color);
    localStorage.setItem('colorState', JSON.stringify(color));
    setIsHiddenColors(true);
  };

  useEffect(() => {
    const noteModal = JSON.parse(localStorage.getItem('noteModal') as string);
    if (noteModal) {
      setNoteModal(noteModal);
    }
    const colorState = JSON.parse(localStorage.getItem('colorState') as string);
    if (colorState) {
      setColorState(colorState);
    }
  }, []);

  const initNote = async () => {
    try {
      if (!user) return;

      const getedNote = await getNoteQuery();
      if (!getedNote.body.data) {
        const createdNote = await createNoteQuery();
        setValue(createdNote.body.data.content);
      } else {
        setValue(getedNote.body.data.content);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (value) return;
    initNote();
  }, [!!user]);

  const updateNote = async () => {
    try {
      if (!user) return;

      await updateNoteQuery({content: value});
    } catch (e) {
      console.log(e);
    }
  };

  console.log('value', value);

  return {
    noteModal,
    noteModalHandler,
    colorState,
    isHiddenColors,
    setIsHiddenColors,
    onChengeColorState,
    coord,
    onDragStart,
    onDragEnd,
    value,
    onChangeValue,
    refNote,
    user,
    setValue,
  };
};
