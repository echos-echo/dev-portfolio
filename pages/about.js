import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import AboutMeContainer from '../components/AboutMeContainer'
import AboutMeSkills from '../components/AboutMeSkills'
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
      <Nav/>
      <Header/>
      <div className={styles.main}>
        <PageTitle title='About'/>
        <AboutMeContainer/>
      </div>
      <Footer/>
    </div>
  )
}
