import React from "react";
import styles from "./Gallery.module.scss";
import Card from "../Card/Card";
import cover_007 from "../../assets/photos/covers/cover_007.jpeg";
import template_2_3 from "../../assets/photos/covers/template_2_3.jpg";

export default function Gallery() {
  const cards_info = [
    {
      img: cover_007,
    },
    {
      img: template_2_3,
    },
  ];

  return (
    <section className={styles.container}>
      <Card card_info={cards_info[1]} />
      <Card card_info={cards_info[1]} />
      <Card card_info={cards_info[1]} />
      <Card card_info={cards_info[1]} />
      <Card card_info={cards_info[1]} />
      <Card card_info={cards_info[1]} />
    </section>
  );
}
