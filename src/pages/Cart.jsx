import React from 'react'
import styles from './Cart.module.scss'
import CartItem from '../components/CartItem/CartItem'

export default function Cart() {
  return (
    <section className={styles.container}>
        <CartItem />
        <CartItem />
        <CartItem />
        <section className={styles.total}>
          <p className={styles.text}>Total</p>
          <p className={styles.price}>S/250.00</p>
          <button className={styles.buy_button}>Continuar compra</button>
        </section>
    </section>
  )
}
