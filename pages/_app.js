import '../styles/globals.scss';
import Head from 'next/head';
import Navbar from '../components/layout/navbar/navbar';
import Footer from '../components/layout/footer';
import { useState, useEffect } from 'react';
import TagManager from 'react-gtm-module'


function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GGTM-T6CJ67G' });

    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, [setTheme]);

  return (
    <>
      <div className='app' data-theme={theme}>
        <Navbar theme={theme} newTheme={setTheme}>
          <Head>
            
            <meta
              name='viewport'
              content='width=device-width, initial-scale=1'
            />
            <link rel='shortcut icon' href='/favicon.ico' />
          </Head>
          

          <Component {...pageProps} currentTheme={theme} />
          <Footer />
        </Navbar>
      </div>
    </>
  );
}

export default MyApp;
