/* eslint-disable no-use-before-define */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-tag-spacing */
import React from 'react';
import RowLayout1, { ROWLAYOUT1TYPE } from '../Layout1';
import RowLayout2, { ROWLAYOUT2TYPE } from '../Layout2';
import PureHtml from '../PureHtml';

const SwitchLayout = (props) => {
  if (props.Type === ROWLAYOUT1TYPE) {
    return (<RowLayout1 {...props}/>);
  } if (props.Type === ROWLAYOUT2TYPE) {
    return (<RowLayout2 {...props}/>);
  }
  return <PureHtml {...props}/>;
};

export default SwitchLayout;
