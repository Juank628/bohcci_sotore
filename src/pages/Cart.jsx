import React from 'react'
import styles from './Cart.module.scss'
import CartItem from '../components/CartItem/CartItem'

export default function Cart() {
  return (
    <section className={styles.container}>
        <CartItem />
        <CartItem />
        <CartItem />
    </section>
  )
}
