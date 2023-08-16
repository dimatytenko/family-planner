import {useState} from 'react';

import {IEmojiObject} from '../types/emoji';

export const useEmoji = (setValue: any) => {
  const [isVisibleEmojis, setIsVisibleEmojis] = useState(false);

  const isVisibleEmojisHandler = () => {
    setIsVisibleEmojis((prev: boolean) => !prev);
  };

  const onEmojiClick = (emojiObject: IEmojiObject) => {
    setValue((prev: string) => prev + emojiObject.emoji);
  };

  return {
    isVisibleEmojis,
    isVisibleEmojisHandler,
    onEmojiClick,
  };
};
