import styles from '../styles/Home.module.css'
import Head from 'next/head'
import NavBar from '../component/nav_bar'
import ArticleTitle from '../component/aticle_title'
import ArrowIcon from '../component/arrow_icon'
import ContactForm from '../component/contact_form'
import Button from '../component/button'

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
       <ArticleTitle title="Contact Us"/>

       <div>
          <p>Want to discuss? Lets chat!</p>
       </div>

       <ContactForm />
       <Button title="Subumit" />


       
       <div className={styles.arrow}>
          <ArrowIcon src="/upwardArrow.png" href="/" />
       </div>
       
     </main>
     </>


  )
}