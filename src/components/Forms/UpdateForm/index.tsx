import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { doc, onSnapshot } from 'firebase/firestore';

import defaultUserIcon from '@/assets/image/defaultUserImage.png';
import { Button } from '@/components/ui-components/Button';
import { ButtonStyled4 } from '@/components/ui-components/Button/config';
import { Input } from '@/components/ui-components/Input';
import {
  DescriptionInputConfig, NameInputConfig, PasswordUpdateInputConfig,
} from '@/components/ui-components/Input/config';
import { Loader } from '@/components/ui-components/Loader';
import { Title } from '@/components/ui-components/Title';
import { Toast } from '@/components/ui-components/Toast';
import { genders, MAX_SIZE_IMAGE } from '@/constants';
import { FIRESTORE_COLLECTION } from '@/constants/firestore';
import { firestore } from '@/firebase/firebaseConfig';
import { useToast } from '@/hooks/useToast';
import { changePassword } from '@/services/firestore/changePassword';
import { updateUser } from '@/services/firestore/updateUser';
import { setUser } from '@/store/sliceUser';
import { UserState, UserUpdateType } from '@/types/user';

import {
  AvatarContainer,
  AvatarImage,
  FormUpdateWrapper,
  GenderOption,
  GenderRadio,
  GenderSelectorContainer,
  InputImage,
  PasswordUpdate,
  UserInfoUpdate,
} from './styles';

export const FormUpdateUser = ({ closeModal }: {closeModal:()=>void}) => {
  const {
    uid, name, description, photoURL, email,
  } = useSelector((state: UserState) => state.user.data);

  const [isLoading, setIsLoading] = useState(false);
  const [avatar, setAvatar] = useState<{fileType: File|null, src: string}>({ fileType: null, src: '' });
  const { control, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const {
    showToast, visible, text, type,
  } = useToast();

  useEffect(() => {
    const userDocRef = doc(firestore, FIRESTORE_COLLECTION.USERS, uid);

    const unsubscribe = onSnapshot(userDocRef, (snapshot) => {
      dispatch(setUser({ ...snapshot.data() }));
    });

    return () => unsubscribe();
  }, []);

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file && file.size >= MAX_SIZE_IMAGE) {
      alert('Выберите изображение размером не более 2Мб');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatar({
        fileType: file!,
        src: reader.result as string,
      });
    };
    reader.readAsDataURL(file!);
  };

  const onSubmitUser = async (data: Partial<UserUpdateType>) => {
    const { password_confirm, password_confirm_new } = data;

    setIsLoading(true);

    try {
      if (password_confirm && password_confirm_new) {
        await changePassword(email!, password_confirm, password_confirm_new);
      }

      await updateUser(uid, data, avatar!.fileType!);

      showToast('Update success', 'success');
      closeModal();
    } catch (error) {
      showToast('Incorrect old password', 'error');
      throw new Error(error as string);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormUpdateWrapper onSubmit={handleSubmit(onSubmitUser)}>
      <UserInfoUpdate>
        <AvatarContainer>
          <label htmlFor="avatarInput">
            <AvatarImage src={photoURL || defaultUserIcon} alt="Avatar" />
          </label>
          <InputImage id="avatarInput" type="file" accept="image/*" onChange={handleAvatarChange} />
          {avatar!.src && (
          <AvatarImage src={avatar!.src} alt="New avatar" />
          )}
        </AvatarContainer>

        <Input
          control={control}
          {...NameInputConfig}
          defaultValue={name}
        />
        <Input
          control={control}
          {...DescriptionInputConfig}
          defaultValue={description}
        />
        <Controller
          name="gender"
          control={control}
          render={({ field: { onChange, value } }) => (
            <GenderSelectorContainer>
              {genders.map((gen: string) => (
                <GenderOption>
                  <GenderRadio
                    type="radio"
                    value={gen}
                    checked={value === gen}
                    onChange={(e) => onChange(e.target.value)}
                  />
                  {gen}
                </GenderOption>
              ))}
            </GenderSelectorContainer>
          )}
        />
      </UserInfoUpdate>

      <PasswordUpdate>
        <Title row="xs">Update password</Title>
        <Input
          control={control}
          {...PasswordUpdateInputConfig}
        />
        <Input
          control={control}
          {...PasswordUpdateInputConfig}
          name={`${PasswordUpdateInputConfig.name}_new`}
        />
        <Button {...ButtonStyled4}>
          {isLoading ? <Loader /> : 'Update'}
        </Button>
      </PasswordUpdate>

      {visible && <Toast text={text} type={type} dataTestId="toast" />}
    </FormUpdateWrapper>
  );
};
