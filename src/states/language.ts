import {atom} from 'recoil';

export enum Language {
  EN = 'en',
  UA = 'ua',
}

export const LanguageState = atom<Language | null>({
  key: 'language',
  default: null,
});
