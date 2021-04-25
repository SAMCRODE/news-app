/* eslint-disable arrow-body-style */
/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react';
import TextCon from '../common/TextCon';

const PureHtml = ({
  Content,
}) => {
  return (
    <>
      <TextCon
        html={Content}
      />
    </>
  );
};

export default PureHtml;

export const ROWLAYOUTHTML = 'ROWLAYOUTHTML';
