/* eslint-disable no-use-before-define */
/* eslint-disable arrow-body-style */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';

const NonEditable = ({ image, captionImage }) => {
  return (
    <>
      <img
        src={image}
        alt="gokuxratinho"
      />
      <span>{captionImage}</span>
    </>
  );
};

export default NonEditable;
