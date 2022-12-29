import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addCartItem } from '../features/cart/cartSlice';
import styles from './product.module.scss';

export default function Product() {
  const dispatch = useDispatch();
  const [imgURL, setImgURL] = useState('');
  const { list } = useSelector((store) => store.products);
  const [productData, setProductData] = useState({ stock: [] });
  const [orderData, setOrderData] = useState({ quantity: 1, size: '' });
  const [stock, setStock] = useState(0);
  const [validationErrors, setValidationErrors] = useState([]);

  const changeQuantity = (e) => {
    let newQuantity = 0;
    if (/^\d+$/.test(e.target.value)) {
      newQuantity = parseInt(e.target.value);
    } else {
      newQuantity = 0;
    }
    setOrderData({
      ...orderData,
      quantity: newQuantity,
    });
  };

  const addQuantity = (factor) => {
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

  const styleSize = (size) => {
    if (size === orderData.size) {
      return {
        backgroundColor: 'brown',
        color: 'white',
      };
    } else {
      return {};
    }
  };

  const updateStock = () => {
    const productSize = productData.stock.find(
      (item) => item.size === orderData.size
    );
    if (productSize) {
      setStock(productSize.quantity);
    } else {
      setStock(0);
    }
  };

  const validate = () => {
    const errors = [];
    const { quantity, size } = orderData;
    if (size === '') {
      errors.push('Seleccione una talla');
      setValidationErrors(errors);
      return;
    }
    if (quantity < 1) errors.push('ingrese una cantidad mayor a cero');
    if (!/^\d+$/.test(quantity)) errors.push('ingrese una cantidad válida');
    if (quantity > stock) errors.push('Cantidad superior al stock');
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
    updateStock();
  }, [orderData.size]);

  useEffect(() => {
    validate();
  }, [stock, orderData]);

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
          {productData.stock.map((item, index) => (
            <li
              key={index}
              className={styles.size}
              style={styleSize(item.size)}
              onClick={changeSize}
            >
              {item.size}
            </li>
          ))}
        </ul>
        <p className={styles.subtitle}>Cantidad</p>
        {orderData.size ? (
          <p className={styles.stock}>Stock: {stock} unidades</p>
        ) : null}
        <div className={styles.quantity}>
          <span onClick={() => addQuantity(-1)}>&lt;</span>
          <input
            type='text'
            name='quantity'
            value={orderData.quantity}
            onChange={changeQuantity}
          />
          <span onClick={() => addQuantity(1)}>&gt;</span>
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
