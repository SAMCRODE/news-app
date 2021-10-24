/* eslint-disable no-use-before-define */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';
import ImageCon from '../common/ImageCon';
import TextCon from '../common/TextCon';
import styles from './layout1.module.scss';

const RowLayout1 = ({
  Content, firstLetterCap, FirstLetter, ImageUrl, CaptionImage, onChange, Id, edit,
}) => {
  return (
    <div className={styles.contentType1}>
      <TextCon
        text={Content}
        onTextChange={(content) => onChange({ Id, Content: content })}
        firstLetterCap={firstLetterCap}
        firstLetter={FirstLetter}
        allowChange={edit}
      />
      <ImageCon
        image={ImageUrl}
        onImageChange={(content) => onChange({ Id, ImageUrl: content })}
        captionImage={CaptionImage}
        onCaptionChange={(content) => onChange({ Id, CaptionImage: content })}
        allowChange={edit}
      />
    </div>
  );
};

export default RowLayout1;

export const ROWLAYOUT1TYPE = 'ROWLAYOUT1TYPE';
