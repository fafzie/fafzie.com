import '../styles/globals.scss';
import Head from 'next/head';
import Navbar from '../components/layout/navbar/navbar';
import Footer from '../components/layout/footer';
import { useState, useEffect } from 'react';
import TagManager from 'react-gtm-module'
import Script from 'next/script'


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
 <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-9YVE4QBELV"/>
    <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9YVE4QBELV', {
            page_path: window.location.pathname,
          });
        `,
        }}
    />
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
