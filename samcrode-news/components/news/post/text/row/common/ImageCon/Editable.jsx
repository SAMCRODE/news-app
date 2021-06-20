/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React, {
  createRef, useEffect, useRef, useState,
} from 'react';
import makeRequest from '../../../../../../../api/axios';
import styles from './imageCon.module.scss';
import * as requestFactory from '../../../../../../../api/requestFactory';
import { UploadApiEndpoint } from '../../../../../../../config';

const Editable = ({
  captionImage, image, setEdit, onChange, onChangeCaption,
}) => {
  const [value, setValue] = useState('');
  const inputFile = useRef(null);
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

  const handleChange = (file) => {
    if (!file) return;

    // setValue(event.target.value);
    // onChange(event.target.value);
    // alert(config.UploadApiEndpoint);
    const formData = new FormData();

    formData.append('img', file, file.name);
    makeRequest(requestFactory.uploadFile(UploadApiEndpoint, formData))
      .then((response) => {
        onChange(response.url);
      });
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
      <img
        alt={caption}
        className={styles.imageContainer}
        role="button"
        onClick={() => {
          inputFile.current.click();
        }}
        src={value}
      />
      <input
        type="file"
        onChange={(e) => {
          handleChange(e.target.files[0]);
        }}
        accept="image/x-png,image/jpeg"
        style={{ display: 'none' }}
        ref={inputFile}
      />
      <label>
        <small>Caption</small>
      </label>
      <input
        name="caption"
        value={caption}
        onChange={handleCaptionChange.bind(this)}
      />
    </div>
  );
};

export default Editable;
