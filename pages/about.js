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

        <div className={styles.description}>
          <ul>
            <li>Hi. My name is Eve Cho. I&apos;m a software engineer committed to combining artistry with logic</li>
            <li>When I&apos;m not coding, you can find me drawing, gaming, or cosplaying.</li>
          </ul>
          skillset????
          <ul>
            <li>js</li>
            <li>node js</li>
            <li>react</li>
            <li>redux</li>
            <li>postgresql</li>
            <li>html</li>
            <li>css</li>
            <li>next</li>
          </ul>
        </div>
        
      </main>
    </div>
  )
}
