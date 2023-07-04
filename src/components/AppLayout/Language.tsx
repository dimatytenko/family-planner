import {FC} from 'react';

import {Select} from '../../ui-kit/Form/Select';
import {ILanguageProps} from '../../types/layout';

export const Language: FC<ILanguageProps> = ({language, onChangeLanguage, languageValues}) => {
  return (
    <Select
      defaultValue={language}
      onChange={onChangeLanguage}
      options={languageValues?.map((item) => ({
        label: item.country,
        value: item.country,
      }))}
    />
  );
};
