import {useRef, useState, useEffect} from 'react';
import type {TourProps} from 'antd';
import {useTranslation} from 'react-i18next';

import {MainEventListContainer} from '../MainEventList';
import {UsersListContainer} from '../UsersList';
import {Br} from '../../ui-kit/Br';
import {SpacesContainer} from '../Spaces';
import {useChangeFirstLogin} from '../../hooks/user';
import {Tour} from '../../ui-kit/Tour';

export const Main = () => {
  const {viewer, changeFirstLogin} = useChangeFirstLogin();
  const [open, setOpen] = useState<boolean>(false);
  const refEvent = useRef(null);
  const refSpaces = useRef(null);
  const {t} = useTranslation();

  const steps: TourProps['steps'] = [
    {
      title: t('common:tours.eventTitle'),
      description: t('common:tours.eventText'),
      target: () => refEvent.current,
    },
    {
      title: t('common:tours.spaceTitle'),
      description: t('common:tours.spaceText'),
      target: () => refSpaces.current,
      scrollIntoViewOptions: true,
    },
  ];

  const onHintEnd = () => {
    changeFirstLogin?.();
    setOpen(false);
  };

  useEffect(() => {
    if (!viewer?.isFirstLogin) return;

    const id = setTimeout(() => {
      setOpen(viewer?.isFirstLogin || false);
    }, 500);

    return () => clearTimeout(id);
  }, []);

  return (
    <>
      <MainEventListContainer refEvent={refEvent} />
      <Br gap={3} />
      <SpacesContainer refSpaces={refSpaces} />
      <Br gap={3} />
      <UsersListContainer />

      <Tour open={open} onClose={onHintEnd} steps={steps} />
    </>
  );
};
