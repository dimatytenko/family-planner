import {FormOutlined} from '@ant-design/icons';
import {useTranslation} from 'react-i18next';

import {NoteModal} from '../../components/NoteModal';
import {FloatButtonStyled} from '../../components/NoteModal/styles';
import {useNoteModal} from '../../hooks/noteModal';
import {useEmoji} from '../../hooks/emoji';

export const NoteModalContainer = () => {
  const {t} = useTranslation();
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
    setValue,
  } = useNoteModal();
  const {onEmojiClick, isVisibleEmojis, isVisibleEmojisHandler} = useEmoji(setValue);

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
            onEmojiClick={onEmojiClick}
            isVisibleEmojis={isVisibleEmojis}
            isVisibleEmojisHandler={isVisibleEmojisHandler}
          />
        </>
      )}
    </>
  );
};
