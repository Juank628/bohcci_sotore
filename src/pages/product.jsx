import React from 'react';
import styles from './product.module.scss';

export default function Product() {
  return (
    <section className={styles.container}>
      <div className={styles.photos}>
        <img className={styles.main_photo} src={null} alt='' />
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>Salida Vichayito - Verde</h2>
        <p className={styles.price}>S/120</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quaerat
          ratione cupiditate corporis aliquam! Consectetur veritatis quod
          recusandae. Rerum, fuga officiis consequuntur voluptatem adipisci et
          necessitatibus iusto quaerat consectetur deleniti.
        </p>
        <p className={styles.subtitle}>Talla</p>
        <ul className={styles.sizes_list}>
          <li className={styles.size}>S</li>
          <li className={styles.size}>M</li>
          <li className={styles.size}>L</li>
        </ul>
        <p className={styles.subtitle}>Cantidad</p>
        <div className={styles.quantity}>
          <span>&lt;</span>
          <input type="text" />
          <span>&gt;</span>
        </div>
        <button className={styles.add_cart_btn}>Agregar al carrito</button>
      </div>
    </section>
  );
}
