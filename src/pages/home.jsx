import React from "react";
import styles from './home.module.css'
import Carousel from "../components/Carousel/Carousel";
import Gallery from "../components/Gallery/Gallery";

export default function Home() {

  return (
    <section className={styles.container}>
      <Carousel/>
      <Gallery/>
    </section>
  );
}
