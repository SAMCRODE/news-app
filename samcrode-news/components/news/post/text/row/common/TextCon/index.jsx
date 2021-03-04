/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import NonEditable from './NonEditable';
import Editable from './Editable';
import styles from './textCon.module.scss';

// eslint-disable-next-line arrow-body-style
const TextCon = ({ text, firstLetterCap, firstLetter }) => {
  const [edit, setEdit] = useState(false);
  const [ctext, setText] = useState(text);
  const [cfirstLetter, setFirstLetter] = useState(firstLetter);

  const onChange = (value) => {
    if (value.length > 0) {
      setText(value.split('').slice(1).join(''));
      setFirstLetter(value[0]);
    } else {
      setText('');
      setFirstLetter('');
    }
  };

  return (
    <div
      onClick={() => { setEdit(true); }}
      className={styles.textCon}
      role="button"
      aria-hidden="true"
    >
      {
        edit
          ? (
            <Editable
              text={ctext}
              firstLetter={cfirstLetter}
              setEdit={setEdit}
              onChange={onChange}
            />
          ) : (
            <NonEditable
              text={ctext}
              firstLetterCap={firstLetterCap}
              firstLetter={cfirstLetter}
            />
          )
        }
    </div>
  );
};

export default TextCon;
