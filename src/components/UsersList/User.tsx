import React, {useState} from 'react';
// import {MoreOutlined} from '@ant-design/icons';

import {IUserProps} from '../../types/user';
import {UserWrapper, UserName, UserUserName, UserContent} from './styles';
import {Modal} from '../../ui-kit/Modal';
import {Avatar} from '../../ui-kit/Avatar';
// import {GhostWrapper} from '../../ui-kit/Button';

export const User: React.FC<IUserProps> = ({user}) => {
  const [previewOpen, setPreviewOpen] = useState(false);

  const handleOpen = () => setPreviewOpen(true);
  const handleCancel = () => setPreviewOpen(false);
  return (
    <UserWrapper>
      <Avatar src={user?.avatar || ''} size={50} onClick={handleOpen} />
      <UserContent>
        <UserName>{`${user?.name ? user?.name : ' '} ${user.lastName ? user.lastName : ' '}`}</UserName>
        <UserUserName>{user.username}</UserUserName>
      </UserContent>
      {/* <MoreButton>
        <GhostWrapper>
          <MoreOutlined />
        </GhostWrapper>
      </MoreButton> */}
      <Modal open={previewOpen} footer={null} onCancel={handleCancel}>
        <img alt="avatar" style={{width: '100%'}} src={user?.avatar} />
      </Modal>
    </UserWrapper>
  );
};
1;
