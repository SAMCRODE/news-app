/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import TextCon from '../common/TextCon';

const PureHtml = ({
  html,
}) => {
  useEffect(() => {
    console.log('esse eh o html', html);
  }, [html]);

  return (
    <TextCon
      html={html}
    />
  );
}
export default PureHtml;

export const ROWLAYOUTHTML = 'ROWLAYOUTHTML';
