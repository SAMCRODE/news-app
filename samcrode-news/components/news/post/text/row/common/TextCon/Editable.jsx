/* eslint-disable no-use-before-define */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React, { createRef, useEffect, useState } from 'react';

const Editable = ({
  text, firstLetter, setEdit, onChange, html,
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
    if (html) {
      setValue(html);
    } else {
      setValue(firstLetter + text);
    }
  }, [text, firstLetter]);

  return (
    <textarea
      ref={editRef}
      value={value}
      onChange={handleChange.bind(this)}
      onClick={(event) => { event.preventDefault(); }}
    />
  );
};

export default Editable;
