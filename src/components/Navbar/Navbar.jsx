import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import logo_sm from '../../assets/logos/logo_sm.jpg';
import cart_icon from '../../assets/icons/cart_icon.png';
import menu_icon from '../../assets/icons/menu_icon.png';

export default function Navbar() {

  const { cartItems } = useSelector((store) => store.cart)

  return (
    <header>
      <div className={styles.mobile_container}>
        <img src={menu_icon} alt='' className={styles.menu} />
        <Link to='/home'>
          <img src={logo_sm} alt='' className={styles.logo} />
        </Link>
        <Link to='/cart'>
          <div className={styles.quantity}>{cartItems.length}</div>
          <img src={cart_icon} alt='' className={styles.cart} />
        </Link>
      </div>
    </header>
  );
}
