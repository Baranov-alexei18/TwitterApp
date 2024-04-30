import React, { ChangeEventHandler, FC, useState } from 'react';

import PictureIcon from '@/assets/image/icons/picture.svg';
import { MAX_CHARACTERS_TEXTAREA } from '@/constants';

import { Button } from '../Button';
import { ButtonStyled4 } from '../Button/config';
import { Loader } from '../Loader';

import {
  ButtonsWrapper,
  ImageUploadButton,
  MaxLengthText, SubmitButton, TextAreaStyle, TextAreaWrapper, UploadButton,
} from './styles';
import { TextAreaTypes } from './types';

export const TextArea: FC<TextAreaTypes> = ({ loader, onSubmit, ...rest }) => {
  const [text, setText] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [isOverLimit, setIsOverLimit] = useState(false);

  const handleTextChange = (event: { target: { value: string; }; }) => {
    const newText = event.target.value;
    setText(newText);
    setIsOverLimit(newText.length >= MAX_CHARACTERS_TEXTAREA);
  };

  const handlePhotoChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const selectedPhoto = event.target.files?.[0];
    setPhoto(selectedPhoto!);
  };

  const handleSubmit = () => {
    if (!text.length) return;

    if (!photo) {
      onSubmit({ text });
    } else {
      onSubmit({ text, photo });
    }

    setText('');
    setPhoto(null);
  };

  return (
    <TextAreaWrapper>
      <TextAreaStyle
        value={text}
        onChange={handleTextChange}
        maxLength={MAX_CHARACTERS_TEXTAREA}
        overLimit={isOverLimit}
        {...rest}
      />
      <MaxLengthText overLimit={isOverLimit}>
        {` ${text.length}/${MAX_CHARACTERS_TEXTAREA}`}
      </MaxLengthText>
      <ButtonsWrapper>
        <ImageUploadButton>
          <img src={PictureIcon} alt="load" />
          <UploadButton type="file" accept="image/*" onChange={handlePhotoChange} />
        </ImageUploadButton>
        <span>{photo?.name}</span>
        <Button
          {...ButtonStyled4}
          onClick={handleSubmit}
          disabled={loader}
        >
          Tweet
        </Button>
      </ButtonsWrapper>
    </TextAreaWrapper>
  );
};
