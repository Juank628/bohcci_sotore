import React from "react";
import styles from "./Gallery.module.scss";
import Card from "../Card/Card";

export default function Gallery(props) {
  const {items} = props

  return (
    <section className={styles.container}>

      {items.map((item, index) => (
        <Card key={index} data={item} />  
      ))}

    </section>
  );
}
