import React from "react";
import { useSelector } from 'react-redux';
import styles from './home.module.css'
import Carousel from "../components/Carousel/Carousel";
import Gallery from "../components/Gallery/Gallery";

export default function Home() {

  const {products} = useSelector((store) => store.products)

  return (
    <section className={styles.container}>
      <Carousel/>
      <Gallery items={products}/>
    </section>
  );
}
