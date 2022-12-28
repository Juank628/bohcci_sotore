import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addCartItem } from '../features/cart/cartSlice';
import styles from './product.module.scss';

export default function Product() {
  const dispatch = useDispatch();
  const { list } = useSelector((store) => store.products);
  const [productData, setProductData] = useState({ sizes: [] });
  const [imgURL, setImgURL] = useState('');
  const [orderData, setOrderData] = useState({ quantity: 1, size: '' });
  const [validationErrors, setValidationErrors] = useState([]);

  const changeHandler = (e) => {
    console.log(e.target.name);
    setOrderData({
      ...orderData,
      [e.target.name]: e.target.value,
    });
  };

  const changeQuantity = (factor) => {
    const newQuantity = Math.max(orderData.quantity + factor, 1);
    setOrderData({
      ...orderData,
      quantity: newQuantity,
    });
  };

  const changeSize = (e) => {
    setOrderData({
      ...orderData,
      size: e.target.textContent,
    });
  };

  const checkSelection = (size) => {
    if (size === orderData.size) {
      return {
        backgroundColor: 'brown',
        color: 'white',
      };
    } else {
      return {};
    }
  };

  const validate = () => {
    const errors = [];
    if (!/^\d+$/.test(orderData.quantity))
      errors.push('ingrese una cantidad válida');
    if (orderData.quantity > 2) errors.push('Cantidad superior a la permitida');
    if (orderData.size === '') errors.push('Seleccione una talla');
    setValidationErrors(errors);
  };

  const addToCart = () => {
    dispatch(addCartItem(orderData));
  };

  useEffect(() => {
    let params = new URL(document.location).searchParams;
    const id = parseInt(params.get('id'));
    setProductData(list.find((item) => item.id === id));
    setOrderData({ ...orderData, id });
    setImgURL(`/photos/products/${id}.jpg`);
    validate();
  }, []);

  useEffect(() => {
    validate();
  }, [orderData]);

  return (
    <section className={styles.container}>
      <div className={styles.photos}>
        <img className={styles.main_photo} src={imgURL} alt='' />
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>{productData.name}</h2>
        <p className={styles.price}>S/{productData.price}</p>
        <p>{productData.description}</p>
        <p className={styles.subtitle}>Talla</p>
        <ul className={styles.sizes_list}>
          {productData.sizes.map((size, index) => (
            <li
              key={index}
              className={styles.size}
              style={checkSelection(size)}
              onClick={changeSize}
            >
              {size}
            </li>
          ))}
        </ul>
        <p className={styles.subtitle}>Cantidad</p>
        <div className={styles.quantity}>
          <span onClick={() => changeQuantity(-1)}>&lt;</span>
          <input
            type='text'
            name='quantity'
            value={orderData.quantity}
            onChange={changeHandler}
          />
          <span onClick={() => changeQuantity(1)}>&gt;</span>
        </div>
        <button
          className={styles.add_cart_btn}
          onClick={addToCart}
          disabled={validationErrors.length}
        >
          AGREGAR AL CARRITO
        </button>
        <ul>
          {validationErrors.map((error, index) => (
            <li key={index} className={styles.error}>
              {error}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
