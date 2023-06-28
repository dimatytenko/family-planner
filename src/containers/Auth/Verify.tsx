import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';

import {useSetLogin} from '../../hooks/auth';
import {EmptyComponent} from '../../ui-kit/Empty';

export const VerifyContainer = () => {
  const [message, setMessage] = useState<string | null>(null);
  const {setUser} = useSetLogin();
  const {t} = useTranslation();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get('message');
    setMessage(message);
    const queryParamsString = urlParams.get('queryParams');
    if (!queryParamsString) return;
    const queryParams = JSON.parse(decodeURIComponent(queryParamsString || ''));
    setUser(queryParams);
  }, []);

  return <EmptyComponent description={t(`common:messages.${message}`)} />;
};
