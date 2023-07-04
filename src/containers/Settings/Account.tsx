import {useNavigate} from 'react-router-dom';
import {useSetRecoilState} from 'recoil';

import {DrawerState} from '../../states/layout';
import {Account} from '../../components/Account';
import {useUser, useAvatar} from '../../hooks/user';
import {route} from '../../constants/routes';

export const AccountContainer = () => {
  const setDrawer = useSetRecoilState(DrawerState);
  const navigate = useNavigate();
  const {userInfo, userData} = useUser();
  const {avatarData} = useAvatar();

  const goToChangePassword = () => {
    setDrawer((prev) => ({...prev, drawer: false, childrenDrawer: false}));
    navigate(route.changePassword.path);
  };

  return (
    <Account userInfo={userInfo} userData={userData} avatarData={avatarData} goToChangePassword={goToChangePassword} />
  );
};
