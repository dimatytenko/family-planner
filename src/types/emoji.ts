import {EmojiStyle, SkinTones} from 'emoji-picker-react';

export interface IEmojiObject {
  activeSkinTone: SkinTones;
  unified: string;
  unifiedWithoutSkinTone: string;
  emoji: string;
  names: string[];
  getImageUrl: (emojiStyle: EmojiStyle) => string;
}
