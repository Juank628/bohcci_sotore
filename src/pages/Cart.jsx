import React, {useState} from 'react';
import styles from './Cart.module.scss';
import CartItem from '../components/CartItem/CartItem';

export default function Cart() {
  const [dinamicMargin, setDinamicMargin] = useState({marginTop: 0})
  
  document.addEventListener('scroll', () => {
    const scroll = document.documentElement.scrollTop
    const viewPortX = window.innerWidth

    if(viewPortX >= 992) {
      setDinamicMargin({
        marginTop: scroll
      })
    }
  })

  const buy = () => {
    console.log('in development')
  }

  return (
    <section className={styles.container}>
      <div className={styles.cards_container}>
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <section className={styles.total_container} style={dinamicMargin}>
        <p className={styles.text}>Total</p>
        <p className={styles.price}>S/250.00</p>
        <button className={styles.buy_button} onClick={buy}>Continuar compra</button>
      </section>
    </section>
  );
}
