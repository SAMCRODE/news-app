/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';
import ImageCon from '../common/ImageCon';
import TextCon from '../common/TextCon';
import styles from './layout2.module.scss';

const RowLayout2 = ({
  Content, firstLetterCap, FirstLetter, ImageUrl, CaptionImage,
}) => {
  return (
    <div className={styles.contentType1}>
      <ImageCon
        image={ImageUrl}
        captionImage={CaptionImage}
      />
      <TextCon
        text={Content}
        firstLetterCap={firstLetterCap}
        firstLetter={FirstLetter}
      />
    </div>
  );
};

export default RowLayout2;

export const ROWLAYOUT2TYPE = 'ROWLAYOUT2';
