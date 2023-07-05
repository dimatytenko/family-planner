import {MainEventListContainer} from '../MainEventList';
import {UsersListContainer} from '../UsersList';
import {Br} from '../../ui-kit/Br';
import {SpacesContainer} from '../Spaces';
import {useChangeFirstLogin} from '../../hooks/user';
import {Tour} from '../../ui-kit/Tour';

export const Main = () => {
  const {open, steps, onHintEnd, refEvent, refSpaces} = useChangeFirstLogin();

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
