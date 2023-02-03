import React, {useState, useEffect} from "react";
import styles from "../styles/Home.module.css";

const CarouselData = [
  {
    title: "Achieve Excellence",
    img_src: '/0.jpg'
  },
  {
    title: "Embrace Innovation",
    img_src: '/1.jpg'
  },
  {
    title: "Champion Diversity",
    img_src: '/2.jpg'
  },
  {
    title: "Pursue Collaboration",
    img_src: '/3.jpg'
  },
  {
    title: "Engage With Respect",
    img_src: '/4.jpg'
  },
  // {
  //   title: "img 5",
  //   img_src: '/5.jpg'
  // }
]
const len = CarouselData.length - 1;

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // const [autoPlay, setAutoPlay] = useState(false)

  // useEffect(() => {
  //   let interval;
  //   if(autoPlay) {
  //     interval = setInterval(() => {
  //       setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
  //     }, 5000);
  //   }    
  //   return () => clearInterval(interval);
  // }, [autoPlay, activeIndex]);

  return (
    <div className={styles.active} style={{margin:"0px 0px 100px 0px"}}>

      <div className={styles.carouselImage} id="carouselImage">
        {CarouselData.map((img, index) => (
          <div
            key={index}
            className={index === activeIndex ? styles.active : styles.inactive}
          >
          <img className={styles.carousel_Img} src={img.img_src} alt=""/>
          </div>        
        ))}
      </div>

      <div className={styles.testOnImageHere} id="testOnImageHere">
          {CarouselData.map((img, index) => (
            <div
              key={index}
              className={index === activeIndex ? styles.active : styles.inactive}
            >
            <div>{img.title}</div>  
            </div>        
          ))}
      </div>

      <div className={styles.row} style={{width:360, padding:"0 15px", justifyContent: "space-between", position: "absolute",top:120}}>
        <img 
          className={styles.icon} 
          src='/leftArrow.png'
          onClick={() =>
            setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
        />
        <img  
          className={styles.icon} 
          src='/rightArrow.png'
          onClick={() =>
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
        />
      </div>
    <div>
  </div>
</div>
);
}
