/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import NonEditable from './NonEditable';
import Editable from './Editable';
import styles from './textCon.module.scss';

// eslint-disable-next-line arrow-body-style
const TextCon = ({
  text = '', firstLetterCap = true, firstLetter = '', html, onTextChange, allowChange = true,
}) => {
  const [edit, setEdit] = useState(false);
  const [ctext, setText] = useState(text);
  const [cHtml, setHtml] = useState(html);
  const [cfirstLetter, setFirstLetter] = useState(firstLetter);

  const onChange = (value) => {
    onTextChange(value);

    if (value.length > 0) {
      if (html) {
        setHtml(value);
      } else {
        setText(value.split('').slice(1).join(''));
        setFirstLetter(value[0]);
      }
    } else {
      setText('');
      setFirstLetter('');
    }
  };

  useEffect(() => {
    if (text.length > 0) {
      setText(text.split('').slice(1).join(''));
      setFirstLetter(text[0]);
    } else {
      setText('');
      setFirstLetter('');
    }
  }, [text]);

  return (
    <div
      onClick={() => { setEdit(true); }}
      className={styles.textCon}
      role="button"
      aria-hidden="true"
    >
      {
        (edit && allowChange)
          ? (
            <Editable
              text={ctext}
              firstLetter={cfirstLetter}
              setEdit={setEdit}
              onChange={onChange}
              html={cHtml}
            />
          ) : (
            <NonEditable
              text={ctext}
              firstLetterCap={firstLetterCap}
              firstLetter={cfirstLetter}
              html={cHtml}
            />
          )
        }
    </div>
  );
};

export default TextCon;
