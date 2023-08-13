import {useEffect} from 'react';
import {useRecoilState} from 'recoil';
import i18next from '../utils/i18next';

import {LanguageState, Language} from '../states/language';

const languageValues = [
  {
    country: Language.EN,
  },
  {
    country: Language.UA,
  },
];

export const useLanguage = () => {
  const [language, setLanguage] = useRecoilState(LanguageState);
  const onChangeLanguage = (language: Language) => {
    setLanguage(language);
    i18next.changeLanguage(language, (err) => {
      if (err) return console.log('something went wrong loading', err);
    });
  };

  useEffect(() => {
    const language = localStorage.getItem('i18nextLng') as Language;
    if (language) {
      setLanguage(language);
    } else {
      setLanguage(Language.EN);
    }
  }, []);

  return {language, onChangeLanguage, languageValues};
};
