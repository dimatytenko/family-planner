import {useState, useRef} from 'react';
import {useRecoilState, useSetRecoilState} from 'recoil';
import type {RcFile, UploadProps} from 'antd/es/upload';
import type {UploadFile} from 'antd/es/upload/interface';
import {genConfig, AvatarFullConfig} from 'react-nice-avatar';
import domtoimage from 'dom-to-image';

import {getUserInfo} from '../helpers/user';
import {info, loading, errorMessage} from '../helpers/common';
import {updateUserQuery} from '../queries/user';
import {IUserValues} from '../types/user';
import {userState} from '../states/session';
import {IUser} from '../types/user';
import {updateAvatarQuery} from '../queries/user';
import {getBase64} from '../helpers/common';

export const useViewer = () => {
  const user = useRecoilState(userState);
  return user[0];
};

export const useUpdateViewer = () => {
  const setUser = useSetRecoilState(userState);
  return (user: IUser) => {
    setUser(user);
  };
};

export const useUser = () => {
  const [user, updateUser] = useRecoilState(userState);
  const [isLoading, setIsLoading] = useState(loading);
  const [error, setError] = useState('');

  const resetError = () => setError('');

  const userInfo = getUserInfo(user);

  const onSubmit = async (values: IUserValues, onSuccess?: () => void) => {
    try {
      setIsLoading((prev) => ({...prev, send: true}));

      const res = await updateUserQuery({...values});
      console.log('res', res);
      if (res) {
        updateUser(res.body.user);
        info('Success');
        setIsLoading((prev) => ({...prev, send: false}));
        onSuccess?.();
        return;
      }
    } catch (e) {
      console.log(e);
      const message = errorMessage(e);
      message ? setError(message) : setError('Something went wrong. Please try again.');
      return;
    } finally {
      setIsLoading((prev) => ({...prev, send: false}));
    }
  };

  return {
    user,
    userInfo,
    userData: {onSubmit, resetError, error, isLoading},
  };
};

export const useAvatar = () => {
  const [user, updateUser] = useRecoilState(userState);
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
  const [configAvatar, setConfigAvatar] = useState<AvatarFullConfig | null>();
  const handleCancel = () => setPreviewOpen(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  const generateAvatar = async () => {
    const gender = user?.sex === 'male' ? 'man' : 'woman';
    const config = user?.sex ? genConfig({sex: gender}) : genConfig();
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
    try {
      setLoading(true);
      const res = await updateAvatarQuery({file: {thumbUrl: fileList[0]?.thumbUrl}});
      if (!res) throw new Error("Can't update avatar");

      updateUser((prev) => ({...prev, avatar: res.body.data.avatar}));
      setConfigAvatar(null);
      setFileList([
        {
          uid: res.body.data.avatar,
          name: 'avatar',
          status: 'done',
          url: res.body.data.avatar,
        },
      ]);
    } catch (e) {
      console.log(e);
      const message = errorMessage(e);
      message ? setError(message) : setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
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

  return {
    loading,
    error,
    avatarData: {
      fileList,
      handlePreview,
      handleChange,
      previewImage,
      previewTitle,
      previewOpen,
      handleCancel,
      avatarRef,
      configAvatar,
      generateAvatar,
      saveGenerateAvatar,
      deleteAvatar,
    },
  };
};