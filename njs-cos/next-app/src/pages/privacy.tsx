
import React, { useEffect } from 'react';
import Head from 'next/head';

import styles from './index.module.scss';

export default function Home() {
    
      return (
        <>
          <Head>
            <title>t3lls | Software Solutions</title>
            <meta name="description" content="t3l.ls" />
            <meta name="keywords" content="t3l.ls, t3lls, tells" />
            <meta name="author" content="Tell Hensel" />
            <meta name="copyright" content="© t3lls by Tell Hensel" />
            <meta name="page-topic" content="t3lls" />
            <meta name="content-language" content="EN, DE, AT, CH" />
            <meta charSet="UTF-8" />
            <link rel="shortcut icon" href="https://maintime.io/data/media/t3.ico" type="image/png" />
            <link rel="icon" href="https://maintime.io/data/media/t3.ico" type="image/png" />
          </Head>
          <div className={styles.body}>

            <div className={styles.h1}>
              Coming soon...
            </div>

          </div>
        </>
      );
}