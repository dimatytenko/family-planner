import React, {useState, useEffect} from 'react';

import {useSetLogin} from '../../hooks/auth';
import {EmptyComponent} from '../../ui-kit/Empty';

export const VerifyContainer = () => {
  const [message, setMessage] = useState<string | null>(null);
  const {setUser} = useSetLogin();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get('message');
    console.log('message', message);
    setMessage(message);
    const queryParamsString = urlParams.get('queryParams');
    if (!queryParamsString) return;
    const queryParams = JSON.parse(decodeURIComponent(queryParamsString || ''));
    setUser(queryParams);
  }, []);

  return <EmptyComponent description={message} />;
};
