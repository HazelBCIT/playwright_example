import React from 'react'
import styles from "../styles/Home.module.css";

function CarouselArrowIcon({ prevImg, nextImg }) {
  return (
    <div className={styles.row} style={{width:360, padding:"0 15px", justifyContent: "space-between", position: "absolute",top:120}}>
        <img 
          className={styles.icon} 
          src='/icons/leftArrow.png'
          onClick={prevImg}
        />
        <img  
          className={styles.icon} 
          src='/icons/rightArrow.png'
          onClick={nextImg}
        />
    </div>
  )
}

export default CarouselArrowIcon