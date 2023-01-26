import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../component/nav_bar'
import ArticleTitle from '../component/aticle_title'
import ArrowIcon from '../component/arrow_icon'


export default function About() {
  return (
  <>
   <Head>
        <title>About Us</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - About Us Page" />
        <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
        <link rel="icon" href="/favicon.png" />
  </Head>

    <main className={styles.main} style={{backgroundColor:"var(--quaternary-color)"}}>
      <NavBar />
      <ArticleTitle title="About Us"/>
      <ArticleTitle title="DEPARTMENTS"/>
      <div className={styles.arrow}>
          <ArrowIcon src="/upwardArrow.png" href="/home" />
          <ArrowIcon src="/downwardArrow.png" href="/contact" />
      </div>
      

      <div>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
        
      <div>
        <h2></h2>
        <h2></h2>
      </div>

      <div>
        <h3></h3>
      </div>
      
    </main>
    </>
  )
  
}