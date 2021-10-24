import React from 'react';
import FileInput from '../../common/Input/File';
import TextInput from '../../common/Input/Text';
import { New } from '../../../models/New';
import styles from './common.module.scss';

interface FormNewProps {
  setNews: any;
  save: any;
  news: New;
}

const FormNew = ({ setNews, save, news }: FormNewProps) => (
  <div className={styles.container}>
    <form className={styles.forms}>
      <div className={styles.formTextInputs}>
        <TextInput
          value={news.Name || ''}
          onChange={(name: string) => {
            setNews({ ...news, Name: name });
          }}
          label="Título"
          placeholder="ex: Messi joga muito e Vila Nova goleia"
          invalidMsg=""
        />
        <TextInput
          value={news.Description || ''}
          onChange={(description: string) => {
            setNews({ ...news, Description: description });
          }}
          paddingTop={30}
          label="Sub Título"
          placeholder="ex: Com dois gols do atacante, o time agora assume a liderança do brasileirão"
          invalidMsg=""
        />
        <TextInput
          value={news.CategoryName || ''}
          onChange={(categoryName: string) => {
            setNews({ ...news, CategoryName: categoryName });
          }}
          paddingTop={30}
          label="Categoria"
          placeholder="ex: Futebol"
          invalidMsg=""
        />
      </div>
      <div
        className={styles.imgContainer}
        style={{ backgroundColor: news.BackgroundColor }}
      >
        <FileInput
          src={news.ImageUrl || ''}
          onChange={(src: string) => {
            setNews({ ...news, ImageUrl: src });
          }}
        />
        <span>Imagem da notícia</span>
        <input
          type="color"
          id="background-news"
          value={news.BackgroundColor || '#000000'}
          onChange={(event) => { setNews({ ...news, BackgroundColor: event.target.value }); }}
        />
      </div>
      <div className={styles.btnContainer}>
        <button
          type="button"
          onClick={(e) => { e.preventDefault(); save(news); }}
          className={styles.btn}
        >
          Salvar e continuar
        </button>
      </div>
    </form>
  </div>
);

export default FormNew;
