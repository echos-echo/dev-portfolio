import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'
import PageTitle from '../components/PageTitle'
import styles from '../styles/Home.module.css'

export default function Gallery() {
  return (
    <div className={styles.container}>
      <Head>
        <title>E.cho - about me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <Header/>
      <div className={styles.main}>
        <PageTitle title='Project Gallery'/>

        this is where project components should go
        
      </div>
      <Footer/>
    </div>
  )
}
