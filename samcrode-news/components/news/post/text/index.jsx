/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import RowAdd from './row/Add';
import RowLayout1 from './row/Layout1';
import RowLayout2 from './row/Layout2';
import PureHtml from './row/PureHtml';
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
      <RowLayout1
        Content="a última segunda feira foram divulgadas imagens que deixaram vários usuários confusos
        na internet. Nas imagens vemos o apresentador de televisão Ratinho espancando o herói
        Goku. Goku derrotou grandes vilões como Freezer e Verditas, mas parece não conseguir
        fazer o mesmo com o apresentador do sistema brasileira de televisão (SBT).
        <br>
        Nossa equipe buscou contato com a equipe do apresentador, e obtivemos a surpreendente
        resposta que sim, as imagens são verdadeiras, e vão ao ár semana que vem.
        Também buscamos a família de Goku que desesperada não tem resposta do mesmo desde domingo passado,
        segundo eles Goku teria dito que voltaria assim que acabasse o programa do Faustão, mas isso não ocorreu.
        "
        FirstLetter="N"
        firstLetterCap
        ImageUrl="https://pbs.twimg.com/media/D9EaDlrUIAEuiVW.png:large"
        CaptionImage="Ratinho segurando goku"
      />
      <RowLayout2
        Content=" melhor amigo de goku, Verdita, disse com lágrimas de ódio, que vingará o amigo caso a notícia seja
        verdadeira. 'Esse desgraçado irá sofrer pelo que fez'
        <br>
        Segundo ele, o amigo já lhe ajudou de várias formas, e que não deixará impune essa injustiça.
        "
        FirstLetter="O"
        firstLetterCap
        ImageUrl="https://maisdeoitomil.files.wordpress.com/2015/04/vegeta-chorando-lagrimas-negras.png?w=400"
        CaptionImage="Melhor amigo de Goku chora"
      />
      <PureHtml
        Content="<h3 style='text-align: center'>Notas</h3>"
      />
      <PureHtml
        Content="<p style='text-align: center'>A nossa equipe esclarece que não incitamos e somos contra qualquer tipo de violência. E essa reportagem
        foi de cunho totalmente jornalístico e informativo!</p>"
      />
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
