// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { AppProps } from 'next/app';

// Components
import { Layout } from '@components/Layout';

const MyApp = ({ Component, pageProps } = AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.any // eslint-disable-line
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
