/* eslint-disable arrow-body-style */
/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react';
import TextCon from '../common/TextCon';

const PureHtml = ({
  html,
}) => {
  return (
    <>
      <TextCon
        html={html}
      />
    </>
  );
};

export default PureHtml;

export const ROWLAYOUTHTML = 'ROWLAYOUTHTML';
