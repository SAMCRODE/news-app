import React from 'react';
import RowLayout1 from './row/Layout1';
import RowLayout2 from './row/Layout2';
import PureHtml from './row/PureHtml';
import styles from './text.module.scss';

const PostText = () => {
  const nClick = () => {
    console.log('clicked');
  };

  return (
    <div className={styles.contentNew}>
      <RowLayout1
        text="a última segunda feira foram divulgadas imagens que deixaram vários usuários confusos
      na internet. Nas imagens vemos o apresentador de televisão Ratinho espancando o herói
      Goku. Goku derrotou grandes vilões como Freezer e Verditas, mas parece não conseguir
      fazer o mesmo com o apresentador do sistema brasileira de televisão (SBT).
      <br>
      Nossa equipe buscou contato com a equipe do apresentador, e obtivemos a surpreendente
      resposta que sim, as imagens são verdadeiras, e vão ao ár semana que vem.
      Também buscamos a família de Goku que desesperada não tem resposta do mesmo desde domingo passado,
      segundo eles Goku teria dito que voltaria assim que acabasse o programa do Faustão, mas isso não ocorreu.
      "
        firstLetter="N"
        firstLetterCap
        image="https://pbs.twimg.com/media/D9EaDlrUIAEuiVW.png:large"
        captionImage="Ratinho segurando goku"
      />
      <RowLayout2
        text=" melhor amigo de goku, Verdita, disse com lágrimas de ódio, que vingará o amigo caso a notícia seja
        verdadeira. 'Esse desgraçado irá sofrer pelo que fez'
        <br>
        Segundo ele, o amigo já lhe ajudou de várias formas, e que não deixará impune essa injustiça.
        "
        firstLetter="O"
        firstLetterCap
        image="https://maisdeoitomil.files.wordpress.com/2015/04/vegeta-chorando-lagrimas-negras.png?w=400"
        captionImage="Melhor amigo de Goku chora"
      />
      <PureHtml
        html="<h3 style='text-align: center'>Notas</h3>"
      />
      <PureHtml
        html="<p style='text-align: center'>A nossa equipe esclarece que não incitamos e somos contra qualquer tipo de violência. E essa reportagem
        foi de cunho totalmente jornalístico e informativo!</p>"
      />
    </div>
  );
};

export default PostText;
