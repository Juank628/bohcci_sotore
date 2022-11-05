import React from 'react'
import styles from './Card.module.css'
import Colorset from '../Colorset/Colorset'

export default function Card(props) {
  return (
    <section className={styles.container}>
        <div className={styles.img_area}>
          <img src={props.card_info.img} alt="" />
        </div>
        <div className={styles.info}>
            <p className={styles.title}>Salida Vichallito</p>
            <p className={styles.price}>S/250</p>
        </div>
    </section>
  )
}
