import {atom} from 'recoil';

export type DrawerStateType = {
  drawer?: boolean;
  childrenDrawer?: boolean;
};

export const DrawerState = atom<DrawerStateType>({
  key: 'drawer',
  default: {
    drawer: false,
    childrenDrawer: false,
  },
});

export enum Language {
  EN = 'en',
  UA = 'ua',
}

export const LanguageState = atom<Language | null>({
  key: 'language',
  default: null,
});
