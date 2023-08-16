import React from 'react';
import ReactDOM from 'react-dom';
import EmojiPicker from 'emoji-picker-react';

import {Note, NoteBody, NoteHeader, NoteModalWrapper, NoteActions, NoteColorHeader, NoteColor} from './styles';
import {CloseCircleOutlined, MoreOutlined} from '@ant-design/icons';
import {GhostWrapper} from '../../ui-kit/Button';
import {colors} from '../../constants/common';
import {InputTextArea} from '../../ui-kit/Form/Input';
import {INoteModalProps} from '../../types/note';
import {IconSvg} from '../../ui-kit/Icon/Svg';

export const NoteModal: React.FC<INoteModalProps> = ({
  noteModal,
  colorState,
  onChengeColorState,
  isHiddenColors,
  setIsHiddenColors,
  coord,
  onDragStart,
  onDragEnd,
  value,
  onChangeValue,
  noteModalHandler,
  refNote,
  placeholder,
  onEmojiClick,
  isVisibleEmojis,
  isVisibleEmojisHandler,
}) => {
  if (!noteModal) return <></>;

  const portalElement = document.getElementById('portal');
  if (!portalElement) return null;

  return ReactDOM.createPortal(
    <NoteModalWrapper
      ref={refNote}
      x={coord?.x}
      y={coord?.y}
      draggable={true}
      onDragStart={(e) => onDragStart(e)}
      onDragEnd={(e) => onDragEnd(e)}>
      <Note>
        <NoteColorHeader $isHidden={isHiddenColors}>
          {colors.map((color, i) => (
            <NoteColor key={color.body} $color={color.header} onClick={() => onChengeColorState(i)} />
          ))}
        </NoteColorHeader>
        <NoteHeader $color={colors[colorState].header}>
          <NoteActions>
            <GhostWrapper onClick={() => setIsHiddenColors(false)}>
              <MoreOutlined />
            </GhostWrapper>
            <GhostWrapper onClick={noteModalHandler}>
              <CloseCircleOutlined />
            </GhostWrapper>
          </NoteActions>
        </NoteHeader>
        <NoteBody $color={colors[colorState].body} onClick={() => setIsHiddenColors(true)}>
          <InputTextArea
            placeholder={placeholder}
            rows={6}
            back={colors[colorState].body}
            value={value}
            onChange={onChangeValue}
          />

          {!isVisibleEmojis ? (
            <GhostWrapper onClick={isVisibleEmojisHandler}>
              <IconSvg type="emojiWink" fill="blue" stroke="blue" width={'16'} height={'16'} viewBox="0 0 32 32" />
            </GhostWrapper>
          ) : (
            <GhostWrapper onClick={isVisibleEmojisHandler}>
              <IconSvg type="emojiAngry" fill="alert" stroke="alert" width={'16'} height={'16'} viewBox="0 0 32 32" />
            </GhostWrapper>
          )}

          {isVisibleEmojis && <EmojiPicker onEmojiClick={(e) => onEmojiClick(e)} height={400} />}
        </NoteBody>
      </Note>
    </NoteModalWrapper>,
    portalElement,
  );
};
