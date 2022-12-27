import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
import styles from './cart.module.scss';
import CartItem from '../components/CartItem/CartItem';
import emptyCartIcon from '../assets/icons/empty_cart_icon.png'

export default function Cart() {
  const dispatch = useDispatch();
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

  const buy = () => {
    console.log('...uder construction');
  };

  return (
    <section className={styles.container}>
      {cartItems.length > 0 ? (
        <Fragment>
          <div className={styles.cards_container}>
            {cartItems.map((item, index) => (
              <CartItem key={index} data={item} />
            ))}
          </div>

          <section className={styles.total_container} style={dinamicMargin}>
            <p className={styles.text}>Total</p>
            <p className={styles.price}>S/250.00</p>
            <button type='button' className={styles.buy_button} onClick={buy}>
              Continuar compra
            </button>
          </section>
        </Fragment>
      ) : (
          <div className={styles.empty_cart_container}>
            <p className={styles.empty_cart_text}>No has agregado ningún producto al carrito...</p>
            <img className={styles.empty_cart_img} src={emptyCartIcon} alt="" />
          </div>
      )}
    </section>
  );
}
