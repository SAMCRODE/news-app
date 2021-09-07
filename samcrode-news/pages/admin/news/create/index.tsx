import React, { useState } from 'react';
import FileInput from '../../../../components/common/Input/File';
import TextInput from '../../../../components/common/Input/Text';
import { New } from '../../../../models/New';
import styles from './create.module.scss';

const NewsCreate = () => {
  const [news, setNews] = useState<New>();

  return (
  <div className={styles.container}>
    <form className={styles.forms}>
      <div className={styles.formTextInputs}>
        <TextInput
          label="Título"
          placeholder="ex: Messi joga muito e Vila Nova goleia"
        />
        <TextInput
          paddingTop={30}
          label="Sub Título"
          placeholder="ex: Com dois gols do atacante, o time agora assume a liderança do brasileirão"
        />
        <TextInput
          paddingTop={30}
          label="Categoria"
          placeholder="ex: Futebol"
        />
      </div>
      <div className={styles.imgContainer}>
        <FileInput
          onChange={(src: string) => {
            setNews({...news, ImageUrl: src})
          }}
        />
        <span>Imagem da notícia</span>
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.btn}>Salvar e continuar</button>
      </div>
    </form>
  </div>
  );
};

export default NewsCreate;
