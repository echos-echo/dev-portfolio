import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'
import PageTitle from '../components/PageTitle'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>E.cho - about me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <Header/>
      <div className={styles.main}>
        <PageTitle title='About'/>

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
        
      </div>
      <Footer/>
    </div>
  )
}
