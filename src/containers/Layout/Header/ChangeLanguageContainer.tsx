import {Language} from '../../../components/AppLayout/Language';
import {useLanguage} from '../../../hooks/layout';

export const ChangeLanguageContainer = () => {
  const {language, onChangeLanguage, languageValues} = useLanguage();
  if (!language) return null;
  return <Language language={language} onChangeLanguage={onChangeLanguage} languageValues={languageValues} />;
};
