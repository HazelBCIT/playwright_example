import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../component/nav_bar'
import ArticleTitle from '../component/aticle_title'
import NavArrow from '../component/nav_arrow'
import Carousel from '../component/carousel'


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
      
      <div className={styles.arrow}>
          <NavArrow src="/upwardArrow.png" href="/" />
          <NavArrow src="/downwardArrow.png" href="/contact" />
      </div>
      
      <div className={styles.article_container}>
        <p>We are proud to deliver an education that goes beyond textbooks and classrooms.</p>
        <p>Our students gain the technical skills, real-world experience, and problem-solving ability needed to embrace complexity and lead innovation in a rapidly changing workforce.</p>
        <p>Through close collaboration with industry, our network of alumni and partners continue to achieve global success.</p>
        <h2>Information Sessions</h2>
        <p>Information sessions are a simple way to figure out the next step along your career path. Learn more about the programs that interest you.</p>
        <h3>Big Info</h3>
        <p>Big Info is the largest program expo and information session at BCIT. It’s your chance to find out about all our programs – from business and media, computing and IT, engineering, health sciences, trades and apprenticeships, and applied and natural sciences.</p>
        <p>If you missed our fall event the next Big Info is scheduled to return on February 15, 2023.</p>
        <h2>Capmpus Tours</h2>
        <p>Tours run weekdays September to May, on your Burnaby campus. See BCIT in person and get a taste of campus life.</p>
      </div>

      <Carousel />

      <ArticleTitle title="DEPARTMENTS"/>

      <div>
        <ul className={styles.list} style={{alignItems:"flex-start", height:"360px", margin: "30px 0"}}>
          <li>Applied & Natural Sciences</li>
          <li>Business & Media</li>
          <li>Computing & IT</li>
          <li>Engineerin</li>
          <li>Health Sciences</li>
          <li>Trades & Apprenticeships</li>
        </ul>
      </div>
    </main>
    </>
  )
  
}