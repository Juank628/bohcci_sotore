import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import logo_sm from '../../assets/logos/logo_sm.jpg';
import cart_icon from '../../assets/icons/cart_icon.png';
import menu_icon from '../../assets/icons/menu_icon.png';

export default function Navbar({showMenuHandler, goTo}) {
  const { cartItems } = useSelector((store) => store.cart);

  const openMenu = () => {
    showMenuHandler(true);
  };

  const goToSection = (section) => {
    goTo(section);
  }

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

      <div className={styles.desktopContainer}>
        <Link to='/'>
          <img src={logo_sm} alt='' className={styles.logo} />
        </Link>
        <nav>
          <ul className={styles.linksList}>
            <li><Link to="/" onClick={()=>goToSection('section-1')}>Salidas adulto</Link></li>
            <li>|</li>
            <li><Link to="/" onClick={()=>goToSection('section-2')}>Salidas mamá hija</Link></li>
            <li>|</li>
            <li><Link>Pantalones</Link></li>
          </ul>
        </nav>
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
