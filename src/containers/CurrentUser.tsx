import React, {useState, useEffect} from 'react';

import {useFetchSession} from '../hooks/auth';
import {WithChildren} from '../types/helpers';
// import {Spinner} from '../ui-kit/Spinner';
import {Lottie} from './Lottie';

const CurrentUser: React.FC<WithChildren> = ({children}) => {
  const session = useFetchSession();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!session?.loading) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [session?.loading]);

  if (session?.loading || loading) return <Lottie />;

  return children as React.ReactElement;
};

export default CurrentUser;
