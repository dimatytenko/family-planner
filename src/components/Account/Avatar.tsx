import React from 'react';
import {Modal} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import Avatar from 'react-nice-avatar';

import {AvatarWrapper, StyledUpload, Drawerlist, StyledButton} from './styles';
import {IAccountAvatarProps} from '../../types/user';

export const AccountAvatar: React.FC<IAccountAvatarProps> = ({
  avatarData: {
    avatarRef,
    configAvatar,
    fileList,
    handlePreview,
    handleChange,
    previewOpen,
    previewTitle,
    previewImage,
    handleCancel,
    generateAvatar,
    deleteAvatar,
    saveGenerateAvatar,
  },
}) => {
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{marginTop: 8}}>Upload</div>
    </div>
  );

  return (
    <>
      <AvatarWrapper ref={avatarRef}>
        {configAvatar ? (
          <Avatar style={{width: '102px', height: '102px'}} {...configAvatar} />
        ) : (
          <StyledUpload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-circle"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}>
            {fileList.length >= 1 ? null : uploadButton}
          </StyledUpload>
        )}
      </AvatarWrapper>
      <Drawerlist>
        <StyledButton onClick={generateAvatar}>Generate avatar</StyledButton>
        <>
          {configAvatar && (
            <StyledButton variant="secondary" onClick={deleteAvatar}>
              Delete avatar
            </StyledButton>
          )}
          {(configAvatar || fileList[0]?.status === 'error') && (
            <StyledButton variant="success" onClick={saveGenerateAvatar}>
              Update avatar
            </StyledButton>
          )}
        </>
      </Drawerlist>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt="avatar" style={{width: '100%'}} src={previewImage} />
      </Modal>
    </>
  );
};
