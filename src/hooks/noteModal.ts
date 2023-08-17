import {useState, useRef, useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {useDebouncedCallback} from 'use-debounce';

import {NoteModalState} from '../states/noteModal';
import {getNoteQuery, createNoteQuery, updateNoteQuery} from '../queries/note';
import {useViewer} from './user';
import {storageLocal} from '../utils/storageLocal';

export const useNoteModal = () => {
  const [noteModal, setNoteModal] = useRecoilState(NoteModalState);
  const [colorState, setColorState] = useState<number>(0);
  const [isHiddenColors, setIsHiddenColors] = useState(true);
  const [coord, setCoord] = useState<{x: number; y: number} | null>(null);
  const [startCoord, setStartCoord] = useState<{x: number; y: number} | null>(null);
  const [value, setValue] = useState('');
  const debounced = useDebouncedCallback(() => {
    updateNote();
  }, 2000);
  const user = useViewer();
  const refNote = useRef<HTMLDivElement>(null);

  const onChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    debounced();
  };

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
    storageLocal.set('noteModal', !noteModal);
  };

  const onChengeColorState = (color: number) => {
    setColorState(color);
    storageLocal.set('colorState', color);
    setIsHiddenColors(true);
  };

  useEffect(() => {
    const noteModal = storageLocal.get<boolean>('noteModal');
    if (noteModal) {
      setNoteModal(noteModal);
    }
    const colorState = storageLocal.get<number>('colorState');
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
