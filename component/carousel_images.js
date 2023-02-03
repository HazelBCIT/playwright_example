import React from "react";
import styles from '../styles/Home.module.css'

function CarouselImages({ activeIndex, carouselImg }) {
  return (
    <div className={styles.carousel_container}>
      {carouselImg.map((img, index) => (
        <div
          key={index}
          className={index === activeIndex ? styles.active : styles.inactive}
        >
          <img className={styles.carouselImage} id="carouselImage" src={img.img_src} alt=""/>
          <p className={styles.testOnImageHere} id="testOnImageHere">{img.title}</p>  
        </div>        
      ))}
    </div>
  );
}

export default CarouselImages;