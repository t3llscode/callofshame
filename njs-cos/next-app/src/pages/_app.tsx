import '../styles/globals.css'
import styles from "../styles/Home.module.css"
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
    return <>
        <Component className={styles.component} {...pageProps} />
    </>
}
