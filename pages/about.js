import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '../components/Nav'
import styles from '../styles/Nav.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>E.cho - about me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.nav}><Nav/></div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          This is where I talk about myself
        </h1>

        <p className={styles.description}>
          some sort of description
        </p>
        
      </main>
    </div>
  )
}
