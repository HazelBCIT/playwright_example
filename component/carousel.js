import React, {useState, useEffect} from "react";
import styles from "../styles/Home.module.css";

import ArrowIcon from "./arrow_icon";
import CarouselImages from "./carousel_images";

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
      <CarouselImages activeIndex={activeIndex} carouselImg={CarouselData} />
      <div className={styles.row} style={{width:360, padding:"0 15px", justifyContent: "space-between", position: "absolute",top:110}}>
        <ArrowIcon 
          src={"/icons/leftArrow.png"} 
          onClick={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
        /> 
        <ArrowIcon 
          src={"/icons/rightArrow.png"} 
          onClick={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
        />
      </div>
      
    </div>
  );
}
