/* eslint-disable no-use-before-define */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Editable from './Editable';
import NonEditable from './NonEditable';
import styles from './imageCon.module.scss';

const ImageCon = ({
  image = 'https://img1.migalhas.uol.com.br/gf_base/empresas/MIGA/imagens/17416E58717933B96B80FFA816DD8DFF719B_ratinho.jpg',
  captionImage = 'caption this',
  onCaptionChange,
  onImageChange,
  allowChange,
}) => {
  const [edit, setEdit] = useState(false);
  const [cimage, setImage] = useState(image);
  const [caption, setCaption] = useState(captionImage);

  const onChange = (value) => {
    setImage(value);
    onImageChange(value);
  };

  const onChangeCaption = (value) => {
    setCaption(value);
    onCaptionChange(value);
  };

  return (
    <div
      className={styles.imageCon}
      onClick={() => { setEdit(true); }}
      role="button"
      aria-hidden="true"
    >
      {
        (edit && allowChange) ? (
          <Editable
            setEdit={setEdit}
            image={cimage}
            captionImage={caption}
            onChange={onChange}
            onChangeCaption={onChangeCaption}
          />
        )
          : <NonEditable image={cimage} captionImage={caption} />
      }
    </div>
  );
};

export default ImageCon;
