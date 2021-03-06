/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';
import ImageCon from '../common/ImageCon';
import TextCon from '../common/TextCon';
import styles from './layout2.module.scss';

const RowLayout2 = ({
  text, firstLetterCap, firstLetter, image, captionImage,
}) => {
  return (
    <div className={styles.contentType1}>
      <ImageCon
        image={image}
        captionImage={captionImage}
      />
      <TextCon
        text={text}
        firstLetterCap={firstLetterCap}
        firstLetter={firstLetter}
      />
    </div>
  );
};

export default RowLayout2;

export const ROWLAYOUT2TYPE = 'ROWLAYOUT2';
