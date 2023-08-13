import styled from 'styled-components';

import {FloatButton} from '../../ui-kit/Button';

export const NoteModalWrapper = styled.div<{x?: number; y?: number}>`
  position: fixed;
  top: ${({y}) => (!y ? '50%' : y + 'px')};
  left: ${({x}) => (!x ? '50%' : x + 'px')};
  transform: ${({x, y}) => (!x && !y ? 'translate(-50%, -50%)' : '')};
  z-index: 9999;
`;

export const Note = styled.div`
  position: relative;
  min-width: 300px;
  border-radius: ${({theme}) => theme.spacer._2};
  overflow: hidden;
`;
export const NoteColorHeader = styled.div<{$isHidden: boolean}>`
  position: absolute;
  display: flex;
  width: 100%;
  transform: ${({$isHidden}) => ($isHidden ? 'translateY(-105%)' : '')};
  height: 50px;
  background-color: ${({theme}) => theme.palette.colors.secondary};
  border-radius: ${({theme}) => theme.spacer._2} ${({theme}) => theme.spacer._2} 0 0;
  transition: transform 0.3s ease-in-out;
`;

export const NoteColor = styled.div<{$color: string}>`
  width: 100%;
  height: 100%;
  background-color: ${({$color}) => $color};
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;

export const NoteHeader = styled.div<{$color: string}>`
  width: 100%;
  background-color: ${({$color}) => $color};
  padding: ${({theme}) => theme.spacer._1};
  border-radius: ${({theme}) => theme.spacer._2} ${({theme}) => theme.spacer._2} 0 0;
  cursor: grab;
`;

export const NoteActions = styled.div`
  display: flex;
  gap: ${({theme}) => theme.spacer._1};
  justify-content: flex-end;
`;

export const NoteBody = styled.div<{$color: string}>`
  width: 100%;
  min-height: 100%;
  background-color: ${({$color}) => $color};

  padding: ${({theme}) => theme.spacer._1};
  border-radius: 0 0 ${({theme}) => theme.spacer._2} ${({theme}) => theme.spacer._2};
`;

// float button
export const FloatButtonStyled = styled(FloatButton)`
  bottom: ${({theme}) => theme.spacer._14};
  right: ${({theme}) => theme.spacer._6};
`;
// ======================
