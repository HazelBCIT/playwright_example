import styles from '../styles/Home.module.css'
import Head from 'next/head'
import NavBar from '../component/nav_bar'
import ArticleTitle from '../component/aticle_title'
import NavArrow from '../component/nav_arrow'
import ContactForm from '../component/contact_form'

export default function Contact() {
  return (
    <>
    <Head>
         <title>Contact Us</title>
         <meta name="author" content="MDIA 2109" />
         <meta property="og:title" content="Assignment #1 - Contact Us Page" />
         <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
         <link rel="icon" href="/favicon.png" />
   </Head>
 
     <main className={styles.main} style={{backgroundImage:"url('/backgroundMountainUpsideDown.jpg')" }}>
       <NavBar />

       <div style={{height:"5vh"}}></div>
 
        <ArticleTitle title="Contact Us" style={{marginTop:"150px"}}/>

       

       <div style={{margin:"15vh 0 5vh 0"}}>
          <p>Want to discuss? Lets chat!</p>
       </div>

       <ContactForm />

       <div className={styles.arrow}>
          <NavArrow src="/upwardArrow.png" href="/" />
       </div>
       
     </main>
     </>


  )
}