import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'
import PageTitle from '../components/PageTitle'
import ProjectContainer from '../components/ProjectContainer'
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
        {/* props needed are
        title, imagePath, height, width, imgAlt, description, tools, repoURL, siteURL */}
        <ProjectContainer
          title={'i see hue'}
          imagePath={'/i-see-hue-demo.gif'} height={500} width={500}
          imgAlt={'demo gif of i see hue'}
          description={'Simple click-n-drag color sorting game, with various different modes of difficulty.'}
          tools={['ReactJS', 'react-beautiful-dnd']}
          repoURL={'https://github.com/echos-echo/i-see-hue'}
          siteURL={'https://i-see-hue.netlify.app/'}
        />
        <ProjectContainer
          title={'Optimate'}
          imagePath={'/optimate-demo.gif'} height={500} width={500}
          imgAlt={'demo gif of optimate'}
          description={'Dating app that lets you connect with your potential “the one that got away”. Instead of endless swiping on profiles, your matches are the optimal selection for you—just 8 of them daily. '}
          tools={['ReactJS', 'NextJS', 'supabase', 'Redux', 'axios', 'Motion', 'LESS', 'material-ui']}
          repoURL={'https://github.com/OG-FSA-2208/Optimate'} 
          siteURL={'https://optim8.netlify.app/'}
        />
        <ProjectContainer
          title={'ao3 muter'}
          imagePath={''} height={500} width={500}
          imgAlt={'demo of the ao3 muter site'}
          description={'Simple CSS generator meant to be used in conjunction with archiveofourown’s custom CSS functionality. Given the link to a tag, or the link to a fic, it will generate CSS for a user to mute said tag from showing up in their searches.'}
          tools={['ReactJS', 'NextJS', 'clipboard API']}
          repoURL={'https://github.com/OG-FSA-2208/Optimate'} 
          siteURL={'https://optim8.netlify.app/'}
        />
        <ProjectContainer
          title={'Dev Portfolio'}
          imagePath={''} height={500} width={500}
          imgAlt={``}
          description={`Site where my projects and growth as a developer are showcased. You're looking at it!`}
          tools={['ReactJS', 'NextJS', 'material-ui']}
          repoURL={'https://github.com/OG-FSA-2208/Optimate'} 
          siteURL={'https://optim8.netlify.app/'}
        />
        <ProjectContainer
          title={'Pokemon TCG Store'}
          imagePath={'/pokemonTCG-banner.jpg'} height={500} width={500}
          imgAlt={'demo gif of optimate'}
          description={'Mock e-commerce site that sells Pokémon TCG cards. The homepage shows the top popular buys, and you can sort by type, rarity, collection, or even a combination. The site is no longer live, but feel free to look at our repository.'}
          tools={['ReactJS','postgreSQL', 'Redux', 'axios', 'Pokemon TCG API']}
          repoURL={'https://github.com/OG-FSA-2208/Optimate'}
        />
        
      </div>
      <Footer/>
    </div>
  )
}
