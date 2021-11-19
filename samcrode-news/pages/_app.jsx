/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */

import { Provider } from 'react-redux';
import Head from 'next/head';
import { store } from '../store/index';
import Layout from '../components/common/Layout';
import '../styles/globals.scss';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs    /nprogress/0.2.0/nprogress.min.css"
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6EM930Q7JL" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6EM930Q7JL');
              `,
          }}
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
