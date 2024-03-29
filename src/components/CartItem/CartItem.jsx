import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCartItem } from '../../redux/slices/cartSlice';
import styles from './CartItem.module.scss';
import closeIcon from '../../assets/icons/close_icon.png';

export default function CartItem(props) {
  const dispatch = useDispatch();
  const { data } = props;
  const { list } = useSelector((store) => store.products);
  const { VITE_PRODUCTS_BLOB_URL } = import.meta.env;

  const product = list.find((item) => item.id === data.id);

  const deleteProduct = () => {
    dispatch(deleteCartItem(data.id));
  };

  return (
    <section className={styles.container}>
      <div className={styles.photos}>
        <img
          className={styles.main_photo}
          src={`${VITE_PRODUCTS_BLOB_URL}/${data.id}.jpg`}
          alt=""
        />
      </div>
      <div className={styles.info}>
        <button type="button" onClick={deleteProduct} className={styles.close}>
          <img src={closeIcon} alt="close" />
        </button>
        <p className={styles.title}>{product.name}</p>
        <p className={styles.subtitle}>
          Talla:
          {data.size}
        </p>
        <p className={styles.subtitle}>
          Cantidad:
          {data.quantity}
        </p>
        <p className={styles.subtitle}>
          Subtotal:
          {product.price * data.quantity}
        </p>
      </div>
    </section>
  );
}

CartItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    size: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};
