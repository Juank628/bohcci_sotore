import React from "react";
import { useSelector } from 'react-redux';
import styles from './home.module.scss'
import Carousel from "../components/Carousel/Carousel";
import Gallery from "../components/Gallery/Gallery";

export default function Home() {

  const {list} = useSelector((store) => store.products)

  return (
    <section className={styles.container}>
      <Gallery items={list}/>
    </section>
  );
}
