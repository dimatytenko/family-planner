import {useState, useEffect} from 'react';

export const useCopyToClipboard = (resetTime: number) => {
  const [copied, setCopied] = useState(false);
  const [text, setText] = useState('');

  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setText(text);
    setCopied(true);
  };

  useEffect(() => {
    if (!(resetTime && copied)) return;
    const id = setTimeout(() => {
      setCopied(false);
    }, resetTime);
    return () => clearTimeout(id);
  }, []);

  return {copied, copy, text};
};
