import {FC} from 'react';

import {Helmet} from 'react-helmet-async';
import {useTranslation} from 'react-i18next';

interface HelmetComponentProps {
  title: string;
}

export const HelmetComponent: FC<HelmetComponentProps> = ({title}) => {
  const {t} = useTranslation();

  return (
    <Helmet>
      <html lang={t('common:meta.lang')}></html>
      <title>{t(`common:meta.titles.${title}`)}</title>
    </Helmet>
  );
};
