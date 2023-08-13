import React from 'react';
import ReactDOM from 'react-dom';

import {Note, NoteBody, NoteHeader, NoteModalWrapper, NoteActions, NoteColorHeader, NoteColor} from './styles';
import {CloseCircleOutlined, MoreOutlined} from '@ant-design/icons';
import {GhostWrapper} from '../../ui-kit/Button';
import {colors} from '../../constants/common';
import {InputTextArea} from '../../ui-kit/Form/Input';
import {INoteModalProps} from '../../types/note';

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
        </NoteBody>
      </Note>
    </NoteModalWrapper>,
    portalElement,
  );
};
