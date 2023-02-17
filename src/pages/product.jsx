import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addCartItem } from '../redux/slices/cartSlice';
import { readAllProducts } from '../redux/slices/productsSlice';
import styles from './product.module.scss';

export default function Product() {
  const dispatch = useDispatch();
  const id = parseInt(useParams().id, 10);
  const { list } = useSelector((store) => store.products);
  const { cartItems } = useSelector((store) => store.cart);
  const [imgURL, setImgURL] = useState('');
  const [productData, setProductData] = useState({ stock: [] });
  const [orderData, setOrderData] = useState({ quantity: 1, size: '' });
  const [stock, setStock] = useState(0);
  const [validationErrors, setValidationErrors] = useState([]);
  const [isInCart, setIsInCart] = useState(false);
  const { VITE_PRODUCTS_BLOB_URL } = import.meta.env;

  const changeQuantity = (e) => {
    let newQuantity = 0;
    if (/^\d+$/.test(e.target.value)) {
      newQuantity = parseInt(e.target.value, 10);
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
    }
    return {};
  };

  const updateStock = () => {
    const productSize = productData.stock.find(
      (item) => item.size === orderData.size,
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
    updateStock();
  }, [orderData.size]);

  useEffect(() => {
    validate();
  }, [stock, orderData]);

  useEffect(() => {
    if (list.length === 0) {
      dispatch(readAllProducts());
    }
    setProductData(list.find((item) => item.id === id));
    setOrderData({ ...orderData, id });
    setImgURL(`${VITE_PRODUCTS_BLOB_URL}/${id}.jpg`);
    setIsInCart(!!cartItems.find((item) => item.id === id));
    validate();
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.photos}>
        <img className={styles.main_photo} src={imgURL} alt="" />
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>{productData?.name}</h2>
        <p className={styles.price}>
          S/
          {productData?.price}
        </p>
        <p>{productData?.description}</p>

        {isInCart ? (
          <div>
            <p>✅ Este producto ya se encuentra en el carrito</p>
            <p>🛒 Si desea modificarlo, elimínelo del carrito y vuelva a agregarlo</p>
          </div>
        ) : (
          <>
            <p className={styles.subtitle}>Talla</p>
            <ul className={styles.sizes_list}>
              {productData?.stock.map((item) => (
                <li key={item.size}>
                  <button
                    type="button"
                    className={styles.size}
                    style={styleSize(item.size)}
                    onClick={changeSize}
                  >
                    {item.size}
                  </button>
                </li>
              ))}
            </ul>
            <p className={styles.subtitle}>Cantidad</p>
            {orderData.size ? (
              <p className={styles.stock}>
                Stock:
                {stock}
                {' '}
                unidades
              </p>
            ) : null}
            <div className={styles.quantity}>
              <button type="button" onClick={() => addQuantity(-1)}>&lt;</button>
              <input
                type="text"
                name="quantity"
                value={orderData.quantity}
                onChange={changeQuantity}
              />
              <button type="button" onClick={() => addQuantity(1)}>&gt;</button>
            </div>
            <button
              type="button"
              className={styles.add_cart_btn}
              onClick={addToCart}
              disabled={validationErrors.length}
            >
              AGREGAR AL CARRITO
            </button>
            <ul>
              {validationErrors.map((error) => (
                <li key={error} className={styles.error}>
                  {error}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
}
