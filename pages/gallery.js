import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '../components/Nav'
import styles from '../styles/Nav.module.css'

export default function Gallery() {
  return (
    <div className={styles.container}>
      <Head>
        <title>E.cho - gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.nav}><Nav/></div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          This is where my projects go
        </h1>

        <p className={styles.description}>
          <ul>
            <li>i see hue</li>
            <li>Optimate</li>
            <li>Pokemon TCG Shop</li>
            <li>Progress Journal</li>
          </ul>
        </p>
      
      </main>
    </div>
  )
}
