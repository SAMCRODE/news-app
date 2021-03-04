/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React, { createRef, useEffect, useState } from 'react';

const Editable = ({
  image, setEdit, onChange,
}) => {
  const [value, setValue] = useState('');
  const editRef = createRef();

  const checkClick = (event) => {
    if (editRef && !editRef.current.contains(event.target)) {
      setEdit(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', checkClick);

    return () => {
      document.removeEventListener('mousedown', checkClick);
    };
  }, [setEdit, editRef]);

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  useEffect(() => {
    setValue(image);
  }, [image]);

  return (
    <input
      ref={editRef}
      value={value}
      onChange={handleChange.bind(this)}
    />
  );
};

export default Editable;
