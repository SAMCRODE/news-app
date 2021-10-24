/* eslint-disable no-use-before-define */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';
import ImageCon from '../common/ImageCon';
import TextCon from '../common/TextCon';
import styles from './layout2.module.scss';

const RowLayout2 = ({
  Content, firstLetterCap, FirstLetter, ImageUrl, CaptionImage, onChange, Id, edit,
}) => {
  return (
    <div className={styles.contentType1}>
      <ImageCon
        image={ImageUrl}
        onImageChange={(content) => onChange({ Id, ImageUrl: content })}
        captionImage={CaptionImage}
        onCaptionChange={(content) => onChange({ Id, CaptionImage: content })}
        allowChange={edit}
      />
      <TextCon
        text={Content}
        onTextChange={(content) => onChange({ Id, Content: content })}
        firstLetterCap={firstLetterCap}
        firstLetter={FirstLetter}
        allowChange={edit}
      />
    </div>
  );
};

export default RowLayout2;

export const ROWLAYOUT2TYPE = 'ROWLAYOUT2';
