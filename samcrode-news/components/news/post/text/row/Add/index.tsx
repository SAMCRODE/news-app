/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';
import { ROWLAYOUT1TYPE } from '../Layout1';
import { ROWLAYOUT2TYPE } from '../Layout2';
import { ROWLAYOUTHTML } from '../PureHtml';
import styles from './add.module.scss';

interface RowAddProps {
  onAdd: any;
}

const RowAdd = ({ onAdd }: RowAddProps) => {
  return (
    <div
      className={styles.container}
    >
      <fieldset
        className={styles.fieldset}
      >
        <legend>Adicionar linha +</legend>
        <button
          onClick={() => onAdd({ Type: ROWLAYOUT1TYPE, Id: Math.random().toString() })}
          type="button"
        >
          Layout 1
        </button>
        <button
          onClick={() => onAdd({ Type: ROWLAYOUT2TYPE, Id: Math.random().toString() })}
          type="button"
        >
          Layout 2
        </button>
        <button
          onClick={() => onAdd({
            Type: ROWLAYOUTHTML,
            Content: '<p style="text-align: center">Edite aqui</p>',
            Id: Math.random().toString(),
          })}
          type="button"
        >
          Html
        </button>
      </fieldset>
    </div>
  );
};

export default RowAdd;
