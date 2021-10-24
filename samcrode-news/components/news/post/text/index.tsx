/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { Row } from '../../../../models/Row';
import RowAdd from './row/Add';
import SwitchLayout from './row/SwitchLayout';
import styles from './text.module.scss';

interface PostTextProps {
  edit: boolean;
  saverows: Row[];
  onChange: any;
}

const PostText = ({ edit = true, saverows, onChange }: PostTextProps) => {
  const [rows, setRows] = useState(saverows);
  const addRow = (row: Row) => {
    onChange([...rows, row]);
  };

  const deleteRow = (row: Row) => {
    onChange(rows.filter((obj) => obj.Id !== row.Id));
  };

  const onChangeRow = (row: Row) => {
    const idx = rows.findIndex((crow: Row) => crow.Id === row.Id);

    onChange([...rows.slice(0, idx), { ...rows[idx], ...row }, ...rows.slice(idx + 1)]);
    // console.log([...rows.slice(0, idx), {...rows[idx], ...row}, ...rows.slice(idx + 1)])
  };

  useEffect(() => {
    setRows(saverows);
  }, [saverows]);

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
            <SwitchLayout {...row} onChange={onChangeRow} edit={edit} />
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
