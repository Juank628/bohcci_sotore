import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCartItem } from '../../features/cart/cartSlice';
import styles from './CartItem.module.scss';
import closeIcon from '../../assets/icons/close_icon.png';

export default function CartItem(props) {
  const dispatch = useDispatch();
  const { data } = props;
  const { list } = useSelector((store) => store.products);

  const product = list.find((item) => item.id === data.id);

  const deleteProduct = () => {
    dispatch(deleteCartItem(data.id))
  }

  return (
    <section className={styles.container}>
      <div className={styles.photos}>
        <img
          className={styles.main_photo}
          src={`./photos/products/${data.id}.jpg`}
          alt='product photo'
        />
      </div>
      <div className={styles.info}>
        <div onClick={deleteProduct} className={styles.close}>
          <img src={closeIcon} alt='close' />
        </div>
        <p className={styles.title}>{product.name}</p>
        <p className={styles.subtitle}>Talla: {data.size}</p>
        <p className={styles.subtitle}>Cantidad: {data.quantity}</p>
        <p className={styles.subtitle}>Subtotal: {product.price}</p>
      </div>
    </section>
  );
}
