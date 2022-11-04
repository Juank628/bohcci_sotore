import React from "react";
import styles from './home.module.css'
import Carousel from "../components/Carousel/Carousel";
import Card from "../components/Card/Card";
import promo_0001 from "../assets/photos/promo_0001.png"

export default function Home() {

  const imageArray = [
    promo_0001
  ]

  return (
    <div className={styles.container}>
      <Carousel imgArray={imageArray}/>
    </div>
  );
}
