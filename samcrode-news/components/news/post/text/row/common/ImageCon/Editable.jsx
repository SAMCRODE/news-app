/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React, { createRef, useEffect, useState } from 'react';
import styles from './imageCon.module.scss';

const Editable = ({
  captionImage, image, setEdit, onChange, onChangeCaption,
}) => {
  const [value, setValue] = useState('');
  const [caption, setCaption] = useState('');
  const editRef = createRef();

  const checkClick = (event) => {
    if (editRef && !editRef.current.contains(event.target)) {
      setEdit(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', checkClick);

    return () => {
      document.removeEventListener('mousedown', checkClick);
    };
  }, [setEdit, editRef]);

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
    onChangeCaption(event.target.value);
  };

  useEffect(() => {
    setValue(image);
    setCaption(captionImage);
  }, [image, captionImage]);

  return (
    <div
      ref={editRef}
      className={styles.editableContainer}
    >
      <label>Url da imagem</label>
      <input
        value={value}
        onChange={handleChange.bind(this)}
      />
      <label>Caption</label>
      <input
        name="caption"
        value={caption}
        onChange={handleCaptionChange.bind(this)}
      />
    </div>
  );
};

export default Editable;
