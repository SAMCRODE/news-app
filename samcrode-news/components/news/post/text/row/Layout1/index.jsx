/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';
import ImageCon from '../common/ImageCon';
import TextCon from '../common/TextCon';
import styles from './layout1.module.scss';

const RowLayout1 = ({
  text, firstLetterCap, firstLetter, image, captionImage,
}) => {
  return (
    <div className={styles.contentType1}>
      <TextCon
        text={text}
        firstLetterCap={firstLetterCap}
        firstLetter={firstLetter}
      />
      <ImageCon
        image={image}
        captionImage={captionImage}
      />
    </div>
  );
};

export default RowLayout1;

export const ROWLAYOUT1TYPE = 'ROWLAYOUT1';
