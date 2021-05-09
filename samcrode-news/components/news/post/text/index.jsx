/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import RowAdd from './row/Add';
import SwitchLayout from './row/SwitchLayout';
import styles from './text.module.scss';

const PostText = ({ edit = true, saverows }) => {
  const [rows, setRows] = useState(saverows);
  const addRow = (row) => {
    setRows([...rows, row]);
  };

  const deleteRow = (row) => {
    setRows(rows.filter((obj) => obj.Id !== row.Id));
  };

  return (
    <div className={styles.contentNew}>
      {
        rows.map((row) => (
          <div
            className={edit ? styles.itemEditable : styles.item}
            key={row.Id}
          >
            {edit && (
            <button
              onClick={deleteRow.bind(this, row)}
              type="button"
            >
              x
            </button>
            )}
            <SwitchLayout {...row} />
          </div>
        ))
      }
      {
        edit && (
        <RowAdd
          onAdd={addRow}
        />
        )
      }
    </div>
  );
};

export default PostText;
