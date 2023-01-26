import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import NavBar from '../component/nav_bar'
import ArrowIcon from '../component/arrow_icon'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Home</title>
      <meta name="author" content="MDIA 2109" />
      <meta property="og:title" content="Assignment #1 - Home Page" />
      <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
      <link rel="icon" href="/favicon.png" />
    </Head>

    <main className={styles.main}>
      {/* background image */}
      <div 
        className={styles.background_image} 
        style={{backgroundImage:"url('/backgroundMountain.jpg')"}}>
      </div>

      <NavBar />
      <div className={styles.col} style={{padding:"0 55% 0 15%",position:"fixed",bottom:"10%"}}>
        <header>
          <h1>An investment in knowledge pays the best interest.</h1>
        </header>

        <div className={styles.border} style={{width:300}}></div>

        <p>
          Different than a college or university, the British Columbia Institute of Technology offers practical, flexible, applied education with instructors who have direct, hands-on experience in their field.
        </p>

        <div className={styles.row} style={{marginTop:"15px"}}>
          <a href="/about">
            <button className={styles.button}>More About Us</button>
          </a>
          <a href="/contact">
            <button className={styles.button}>Contact Us</button>
          </a>
        </div >
      </div>

        <div className={styles.arrow}>
          <ArrowIcon src="/downwardArrow.png" href="/about" />
        </div>
          
      </main>
    </>
  )
}
