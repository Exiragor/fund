import App, { Container } from 'next/app';
import React from 'react';
import { initializeStore } from '../store';
import { Provider } from 'mobx-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style.css";
import Head from 'next/head';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { Provider as BusProvider } from 'react-bus';

const favSizes = [
    24, 32, 48, 64, 96, 128, 256, 512
];


class MyMobxApp extends App {
  static async getInitialProps(appContext) {
    // Get or Create the store with `undefined` as initialState
    // This allows you to set a custom default initialState
    const mobxStore = initializeStore();
    // Provide the store to getInitialProps of pages
    appContext.ctx.mobxStore = mobxStore;

    let appProps = await App.getInitialProps(appContext);

    return {
      ...appProps,

      initialMobxState: mobxStore,
    }
  }

  constructor(props) {
    super(props)
    const isServer = typeof window === 'undefined';
    this.mobxStore = isServer
      ? props.initialMobxState
      : initializeStore(props.initialMobxState);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <BusProvider>
          <Provider store={this.mobxStore}>
            <div className="canvas">
              <Head>
                <title>Наша песня</title>
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
                <link rel="shortcut icon" href="/favicon/favicon-16x16.ico" />
                {favSizes.map(size =>
                    <link key={size} rel="icon"
                          sizes={`${size}x${size}`}
                          href={`/favicon/favicon-${size}x${size}.ico`} />
                )}
                <link rel="icon" sizes="48x48" href="" />
                <meta name="yandex-verification" content="a1d93620e2868dd8" />
                <meta name="verification" content="ea295d80fa4928ee4e953875bfa5f4" />
              </Head>
              <Header />
              <main>
                <Component {...pageProps} />
              </main>
              <Footer />
            </div>
          </Provider>
        </BusProvider>
      </Container>
    )
  }
}
export default MyMobxApp
