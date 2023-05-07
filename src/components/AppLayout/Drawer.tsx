import React, {useState, useRef} from 'react';
import {Drawer, Button, Modal, Avatar as AntdAvatar} from 'antd';
import {PlusOutlined, LogoutOutlined} from '@ant-design/icons';
import type {RcFile, UploadProps} from 'antd/es/upload';
import type {UploadFile} from 'antd/es/upload/interface';
import {genConfig, AvatarFullConfig, Sex} from 'react-nice-avatar';
import domtoimage from 'dom-to-image';
import Avatar from 'react-nice-avatar';

import {IDrawerActions} from '../../types/layout';
import {LinkButton} from '../../ui-kit/Button';
import {route} from '../../constants/routes';
import {Drawerlist, AvatarWrapper, StyledUpload, StyledLogout, AvatarButton, DrawerElWrapper} from './styles';
// import {tryEmailQuery} from '../../queries/try';
import {updateAvatarQuery} from '../../queries/user';
import {Account} from '../../containers/Settings/Account';

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export const DrawerComponent: React.FC<IDrawerActions> = ({
  open,
  onClose,
  onLogOut,
  onChildrenDrawerClose,
  childrenDrawer,
  showChildrenDrawer,
  user,
}) => {
  const avatarRef = useRef<HTMLDivElement>(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: user?.avatar || '123',
      name: 'avatar',
      status: 'done',
      url: user?.avatar,
    },
  ]);
  // console.log('fileList', fileList);
  // console.log('user', user);
  const [configAvatar, setConfigAvatar] = useState<AvatarFullConfig | null>();
  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  const handleChange: UploadProps['onChange'] = async ({fileList: newFileList}) => {
    setFileList(newFileList);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{marginTop: 8}}>Upload</div>
    </div>
  );

  const generateAvatar = async () => {
    const config = user?.sex ? genConfig({sex: user?.sex as Sex}) : genConfig();
    setConfigAvatar(config);
    if (configAvatar || config) {
      const node = avatarRef.current;
      if (node) {
        const blob = await domtoimage.toBlob(node, {
          width: 102,
          height: 102,
        });
        const file = new File([blob], 'image.png');
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const thumbUrl = reader.result;
          setFileList([
            {
              uid: '123',
              name: 'avatar',
              status: 'done',
              thumbUrl: thumbUrl as string,
            },
          ]);
        };
      }
    }
  };

  const saveGenerateAvatar = async () => {
    const res = await updateAvatarQuery({file: {thumbUrl: fileList[0]?.thumbUrl}});

    setConfigAvatar(null);
    setFileList([
      {
        uid: res.body.data.avatar,
        name: 'avatar',
        status: 'done',
        url: res.body.data.avatar,
      },
    ]);
  };

  const deleteAvatar = () => {
    setConfigAvatar(null);
    setFileList([
      {
        uid: user?.avatar || '123',
        name: 'avatar',
        status: 'done',
        url: user?.avatar,
      },
    ]);
  };

  const onLogOutHandler = () => {
    onLogOut?.();
    onClose?.();
  };

  return (
    <>
      <Drawer
        title="Pages"
        placement="right"
        onClose={onClose}
        open={open}
        width={320}
        extra={
          <DrawerElWrapper>
            <AvatarButton onClick={showChildrenDrawer}>
              <AntdAvatar src={user?.avatar} />
            </AvatarButton>
            <StyledLogout onClick={onLogOutHandler}>
              <LogoutOutlined />
            </StyledLogout>
          </DrawerElWrapper>
        }>
        <Drawerlist>
          <LinkButton to={route.picker.path} onClick={onClose}>
            Picker
          </LinkButton>
          <LinkButton to={route.calendar.path} onClick={onClose}>
            Calendar
          </LinkButton>
        </Drawerlist>

        <Drawer title="Account info" width={320} onClose={onChildrenDrawerClose} open={childrenDrawer}>
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
            {/* <Button onClick={sendLetter}>Send letter</Button> */}
            <Button onClick={generateAvatar}>Generate avatar</Button>
            {configAvatar && <Button onClick={deleteAvatar}>Delete avatar</Button>}

            <Button onClick={saveGenerateAvatar}>Update avatar</Button>
          </Drawerlist>
          <Account />
        </Drawer>
      </Drawer>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt="avatar" style={{width: '100%'}} src={previewImage} />
      </Modal>
    </>
  );
};
