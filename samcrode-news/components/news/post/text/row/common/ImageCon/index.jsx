/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Editable from './Editable';
import NonEditable from './NonEditable';
import styles from './imageCon.module.scss';

const ImageCon = ({
  image, captionImage,
}) => {
  const [edit, setEdit] = useState(false);
  const [cimage, setImage] = useState(image);

  const onChange = (value) => {
    setImage(value);
  };

  return (
    <div
      className={styles.imageCon}
      onClick={() => { setEdit(true); }}
      role="button"
      aria-hidden="true"
    >
      {
        edit ? (
          <Editable
            setEdit={setEdit}
            image={cimage}
            captionImage={captionImage}
            onChange={onChange}
          />
        )
          : <NonEditable image={cimage} captionImage={captionImage} />
      }
    </div>
  );
};

export default ImageCon;
