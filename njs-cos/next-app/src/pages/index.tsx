
import React, { useEffect } from 'react';
import Head from 'next/head';

import styles from './index.module.scss';

export default function Home() {

    useEffect(() => {
        const fadeIn = document.getElementById('fade-in');
        setTimeout(() => {
          fadeIn.style.opacity = '1';
        }, 1400);
      }, []);
    
      return (
        <>
          <Head>
            <title>Call Of Shame | Sexual Harassment Awareness</title>
            <meta name="description" content="Call Of Shame" />
            <meta name="keywords" content="Call Of Shame, Catcalling, Sexual Harassment" />
            <meta name="author" content="Tell Hensel" />
            <meta name="copyright" content="© t3lls by Tell Hensel" />
            <meta name="page-topic" content="t3lls" />
            <meta name="content-language" content="EN, DE, AT, CH" />
            <meta charSet="UTF-8" />
            <link rel="shortcut icon" href="https://maintime.io/data/media/t3.ico" type="image/png" />
            <link rel="icon" href="https://maintime.io/data/media/t3.ico" type="image/png" />
            <meta name="theme-color" content="#000000"></meta>
          </Head>
          <div className={styles.body}>

                <div id="fade-in" className={styles.footer}>
                    <div  className={styles.h1}>
                        🚧 Website is currently under construction. 🏗️
                    </div>
                    <div className={styles.h2}>
                        while I am building you may want to have a look at <a href="https://tools.t3l.ls">other projects</a> of mine
                    </div>       
                </div>

          </div> 

          <div className={styles.footer_bar}>

            <a href="/legal">
              Legal Notice / Impressum
            </a>

            <a href="/privacy">
              Privacy Policy / Datenschutz
            </a>

            <a href="mailto:contact@t3l.ls">
              Contact / Kontakt
            </a>

          </div>
        </>
      );
}