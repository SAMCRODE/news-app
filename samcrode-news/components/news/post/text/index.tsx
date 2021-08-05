/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Row } from '../../../../models/Row';
import RowAdd from './row/Add';
import SwitchLayout from './row/SwitchLayout';
import styles from './text.module.scss';

interface PostTextProps {
  edit: boolean;
  saverows: Row[];
}

const PostText = ({ edit = true, saverows }: PostTextProps) => {
  const [rows, setRows] = useState(saverows);
  const addRow = (row: Row) => {
    setRows([...rows, row]);
  };

  const deleteRow = (row: Row) => {
    setRows(rows.filter((obj) => obj.Id !== row.Id));
  };

  return (
    <div className={styles.contentNew}>
      {
        rows.map((row: Row) => (
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
