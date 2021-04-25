/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';
import ImageCon from '../common/ImageCon';
import TextCon from '../common/TextCon';
import styles from './layout1.module.scss';

const RowLayout1 = ({
  Content, firstLetterCap, FirstLetter, ImageUrl, CaptionImage,
}) => {
  return (
    <div className={styles.contentType1}>
      <TextCon
        text={Content}
        firstLetterCap={firstLetterCap}
        firstLetter={FirstLetter}
      />
      <ImageCon
        image={ImageUrl}
        captionImage={CaptionImage}
      />
    </div>
  );
};

export default RowLayout1;

export const ROWLAYOUT1TYPE = 'ROWLAYOUT1TYPE';
