import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import logo_sm from '../../assets/logos/logo_sm.jpg';
import cart_icon from '../../assets/icons/cart_icon.png';
import menu_icon from '../../assets/icons/menu_icon.png';

export default function Navbar(props) {
  const { cartItems } = useSelector((store) => store.cart);

  const openMenu = () => {
    props.showMenuHandler(true);
  };

  const hideIfEmpty = () => {
    if (!cartItems.length) return { visibility: 'hidden' };
  };

  return (
    <header className={styles.mainContainer}>
      <div className={styles.mobileContainer}>
        <img
          src={menu_icon}
          alt=''
          className={styles.menu}
          onClick={openMenu}
        />
        <Link to='/'>
          <img src={logo_sm} alt='' className={styles.logo} />
        </Link>
        <Link to='/cart'>
          <div className={styles.quantity} style={hideIfEmpty()}>
            {cartItems.length}
          </div>
          <img src={cart_icon} alt='' className={styles.cart} />
        </Link>
      </div>
    </header>
  );
}
