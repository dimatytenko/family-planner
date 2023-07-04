import {MainEventListContainer} from '../MainEventList';
import {UsersListContainer} from '../UsersList';
import {Br} from '../../ui-kit/Br';
import {SpacesContainer} from '../Spaces';

export const Main = () => {
  return (
    <>
      <MainEventListContainer />
      <Br gap={3} />
      <SpacesContainer />
      <Br gap={3} />
      <UsersListContainer />
    </>
  );
};
