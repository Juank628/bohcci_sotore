import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './cart.module.scss';
import CartItem from '../components/CartItem/CartItem';
import emptyCartIcon from '../assets/icons/empty_cart_icon.png';

export default function Cart() {
  const { cartItems } = useSelector((store) => store.cart);
  const { list } = useSelector((store) => store.products);
  const [whatsAppText, setWhatsAppText] = useState('');
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

  const buildWhatsAppText = () => {
    let productName = '';
    let text = 'Hola 👋 estoy interesad@ en los siguientes productos: %0D%0A';
    cartItems.forEach((item, index) => {
      productName = list.find((product) => product.id === item.id).name;
      text += `*item: ${index + 1}* %0D%0Aproducto: ${productName} %0D%0Atalla: ${item.size} %0D%0Acantidad: ${item.quantity} %0D%0A`;
    });
    setWhatsAppText(text);
  };

  useEffect(() => {
    buildWhatsAppText();
  }, []);

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
            <a href={`https://api.whatsapp.com/send?phone=956382973&text=${whatsAppText}`} target="_blank" rel="noreferrer" className={styles.buy_button}>
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
