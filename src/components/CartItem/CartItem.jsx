import React from 'react';
import { useSelector } from 'react-redux';
import styles from './CartItem.module.scss';
import closeIcon from '../../assets/icons/close_icon.png';

export default function CartItem(props) {
  const { data } = props;
  const { list } = useSelector((store) => store.products);

  const product = list.find((item) => item.id === data.id);

  return (
    <section className={styles.container}>
      <div className={styles.photos}>
        <img
          className={styles.main_photo}
          src={`./photos/products/${data.id}.jpg`}
          alt=''
        />
      </div>
      <div className={styles.info}>
        <div className={styles.close}>
          <img src={closeIcon} alt='' />
        </div>
        <p className={styles.title}>{product.name}</p>
        <p className={styles.subtitle}>Talla: {data.size}</p>
        <p className={styles.subtitle}>Cantidad: {data.quantity}</p>
        <p className={styles.subtitle}>Subtotal: {product.price}</p>
      </div>
    </section>
  );
}
