import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import SplashContainer from '../components/SplashContainer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>E.cho</title>
        <meta property="og:url" content="https://echos-echo.link" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="E.cho"
        />
        <meta
          property="og:description"
          content="E. Cho is busy committing code... but you can check out their projects here."
        />
        <meta name="description" content="E. Cho is busy committing code... but you can check out their projects here." />
        <meta property="og:image" content={'/portfolio.png' || 'https://echos-echo.link/_next/image?url=%2Fportfolio.png&w=640&q=90'} />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.splash}>
        <SplashContainer/>
      </main>
    </div>
  )
}
