import React from 'react'
import styles from "./Gallery.module.scss"
import Card from "../Card/Card"
import cover_007 from "../../assets/photos/covers/cover_007.jpeg"

export default function Gallery() {

    const cards_info = [
        {
            img: cover_007
        },
    ]

  return (
    <section className={styles.container}>
        <Card card_info={cards_info[0]}/>
        <Card card_info={cards_info[0]}/>
        <Card card_info={cards_info[0]}/>
        <Card card_info={cards_info[0]}/>
        <Card card_info={cards_info[0]}/>
        <Card card_info={cards_info[0]}/>
    </section>
  )
}
