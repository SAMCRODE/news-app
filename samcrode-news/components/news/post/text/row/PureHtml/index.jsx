/* eslint-disable arrow-body-style */
/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react';
import TextCon from '../common/TextCon';

const PureHtml = ({
  Content, onChange, Id, edit,
}) => {
  return (
    <>
      <TextCon
        html={Content}
        onTextChange={(content) => onChange({ Id, Content: content })}
        allowChange={edit}
      />
    </>
  );
};

export default PureHtml;

export const ROWLAYOUTHTML = 'ROWPUREHTML';
