import React from "react";
import styles from './home.module.css'
import Carousel from "../components/Carousel/Carousel";
import Card from "../components/Card/Card";

export default function Home() {
  return (
    <div>
      <Carousel
        imgArray={[
          "https://c4.wallpaperflare.com/wallpaper/594/26/511/women-top-view-brunette-torn-jeans-wallpaper-preview.jpg",
          "https://c4.wallpaperflare.com/wallpaper/870/702/430/macro-simple-background-diamonds-jewels-wallpaper-preview.jpg",
          "https://c1.wallpaperflare.com/preview/707/108/993/woman-portrait-jeans-sweter.jpg",
        ]}
      />
      <div className={styles.catalog_container}>
      <h3>{'Blusas >>>>>'}</h3>
      <div className={styles.gallery_container}>
        <Card />
        <Card />
        <Card />
      </div>
      </div>
    </div>
  );
}
