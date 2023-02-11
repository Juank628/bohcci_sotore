import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './cart.module.scss';
import CartItem from '../components/CartItem/CartItem';
import emptyCartIcon from '../assets/icons/empty_cart_icon.png';

export default function Cart() {
  const { cartItems } = useSelector((store) => store.cart);
  const [dinamicMargin, setDinamicMargin] = useState({ marginTop: 0 });

  document.addEventListener('scroll', () => {
    const scroll = document.documentElement.scrollTop;
    const viewPortX = window.innerWidth;

    if (viewPortX >= 992) {
      setDinamicMargin({
        marginTop: scroll,
      });
    }
  });

  return (
    <section className={styles.container}>
      {cartItems.length > 0 ? (
        <>
          <div className={styles.cards_container}>
            {cartItems.map((item) => (
              <CartItem key={item.id} data={item} />
            ))}
          </div>

          <section className={styles.total_container} style={dinamicMargin}>
            <p className={styles.text}>Total</p>
            <p className={styles.price}>S/250.00</p>
            <a href="https://api.whatsapp.com/send?phone=956382973&text=%20test" target="_blank" rel="noreferrer" className={styles.buy_button}>
              Continuar compra
            </a>
          </section>
        </>
      ) : (
        <div className={styles.empty_cart_container}>
          <p className={styles.empty_cart_text}>No has agregado ningún producto al carrito...</p>
          <img className={styles.empty_cart_img} src={emptyCartIcon} alt="" />
        </div>
      )}
    </section>
  );
}
