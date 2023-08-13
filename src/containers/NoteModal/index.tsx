import {FormOutlined} from '@ant-design/icons';
import {useTranslation} from 'react-i18next';

import {NoteModal} from '../../components/NoteModal';
import {FloatButtonStyled} from '../../components/NoteModal/styles';
import {useNoteModal} from '../../hooks/noteModal';

export const NoteModalContainer = () => {
  const {
    noteModal,
    noteModalHandler,
    colorState,
    onChengeColorState,
    isHiddenColors,
    setIsHiddenColors,
    coord,
    onDragStart,
    onDragEnd,
    value,
    onChangeValue,
    refNote,
    user,
  } = useNoteModal();
  const {t} = useTranslation();

  return (
    <>
      {user && (
        <>
          <FloatButtonStyled
            text={!noteModal ? t('common:noteModal.noteOpen') : t('common:noteModal.noteClose')}
            icon={<FormOutlined />}
            onClick={noteModalHandler}
          />
          <NoteModal
            noteModal={noteModal}
            colorState={colorState}
            onChengeColorState={onChengeColorState}
            isHiddenColors={isHiddenColors}
            setIsHiddenColors={setIsHiddenColors}
            coord={coord}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            value={value}
            onChangeValue={onChangeValue}
            noteModalHandler={noteModalHandler}
            refNote={refNote}
            placeholder={t('common:noteModal.placeholder')}
          />
        </>
      )}
    </>
  );
};
