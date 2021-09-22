import FileInput from "../../../../components/common/Input/File";
import TextInput from "../../../../components/common/Input/Text"
import { New } from "../../../../models/New";
import styles from './common.module.scss';

interface FormNewProps {
  setNews: any;
  save: any;
  news: New;
}

const FormNew = ({setNews, save, news}: FormNewProps) => {
  return (
  <div className={styles.container}>
    <form className={styles.forms}>
      <div className={styles.formTextInputs}>
        <TextInput
          value={news.Name || ''}
          onChange={(name: string) => {
            setNews({...news, Name: name})
          }}
          label="Título"
          placeholder="ex: Messi joga muito e Vila Nova goleia"
        />
        <TextInput
          value={news.Description || ''}
          onChange={(description: string) => {
            setNews({...news, Description: description})
          }}
          paddingTop={30}
          label="Sub Título"
          placeholder="ex: Com dois gols do atacante, o time agora assume a liderança do brasileirão"
        />
        <TextInput
          value={news.CategoryName || ''}
          onChange={(categoryName: string) => {
            setNews({...news, CategoryName: categoryName})
          }}
          paddingTop={30}
          label="Categoria"
          placeholder="ex: Futebol"
        />
      </div>
      <div className={styles.imgContainer}>
        <FileInput
          src={news.ImageUrl || ''}
          onChange={(src: string) => {
            setNews({...news, ImageUrl: src})
          }}
        />
        <span>Imagem da notícia</span>
      </div>
      <div className={styles.btnContainer}>
        <button
        onClick={(e) => { e.preventDefault(); save(news); }}
        className={styles.btn}>Salvar e continuar</button>
      </div>
    </form>
  </div>
  );
}

export default FormNew;
