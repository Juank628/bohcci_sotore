import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Card.module.scss';

export default function Card(props) {
  const { data } = props;

  return (
    <Link to={`/product/${data.id}`} className={styles.container}>
      <div className={styles.img_area}>
        <img src={`./photos/products/${data.id}.jpg`} alt="" />
      </div>
      <div className={styles.info}>
        <p className={styles.title}>
          {' '}
          {data.name}
        </p>
        <p className={styles.price}>
          {' '}
          S/
          {data.price}
        </p>
      </div>
    </Link>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
