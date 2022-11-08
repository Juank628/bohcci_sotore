import React from "react";
import styles from './home.module.css'
import Carousel from "../components/Carousel/Carousel";
import Gallery from "../components/Gallery/Gallery";
import promo_0001 from "../assets/photos/art/promo_0001.png";
import Footer from "../components/Footer/Footer";

export default function Home() {

  const imageArray = [
    promo_0001
  ]

  return (
    <section className={styles.container}>
      <Carousel imgArray={imageArray}/>
      <Gallery/>
      <Footer />
    </section>
  );
}
