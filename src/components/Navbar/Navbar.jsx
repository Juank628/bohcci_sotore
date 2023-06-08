import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import logoSm from '../../assets/logos/logo_sm.jpg';
import cartIcon from '../../assets/icons/cart_icon.png';
import menuIcon from '../../assets/icons/menu_icon.png';

export default function Navbar({ showMenuHandler, goTo }) {
  const { cartItems } = useSelector((store) => store.cart);

  const openMenu = () => {
    showMenuHandler(true);
  };

  const goToSection = (section) => {
    goTo(section);
  };

  const hideIfEmpty = () => {
    if (!cartItems.length) return { visibility: 'hidden' };
    return {};
  };

  return (
    <header className={styles.mainContainer}>
      <div className={styles.mobileContainer}>
        <button type="button" onClick={openMenu} className={styles.menuBtn}>
          <img
            className={styles.menuImg}
            src={menuIcon}
            alt=""
          />
        </button>
        <Link to="/">
          <img src={logoSm} alt="" className={styles.logo} />
        </Link>
        <Link to="/cart">
          <div className={styles.quantity} style={hideIfEmpty()}>
            {cartItems.length}
          </div>
          <img src={cartIcon} alt="" className={styles.cart} />
        </Link>
      </div>

      <div className={styles.desktopContainer}>
        <Link to="/">
          <img src={logoSm} alt="" className={styles.logo} />
        </Link>
        <nav>
          <ul className={styles.linksList}>
            <li><Link to="/" onClick={() => goToSection('section-1')}>Salidas adulto</Link></li>
            <li>|</li>
            <li><Link to="/" onClick={() => goToSection('section-2')}>Salidas kids</Link></li>
            <li>|</li>
            <li><Link to="/" onClick={() => goToSection('section-3')}>Salidas mamá hija</Link></li>
            <li>|</li>
            <li><Link to="/" onClick={() => goToSection('section-4')}>Pantalones</Link></li>
          </ul>
        </nav>
        <Link to="/cart">
          <div className={styles.quantity} style={hideIfEmpty()}>
            {cartItems.length}
          </div>
          <img src={cartIcon} alt="" className={styles.cart} />
        </Link>
      </div>
    </header>
  );
}

Navbar.propTypes = {
  showMenuHandler: PropTypes.func.isRequired,
  goTo: PropTypes.func.isRequired,
};
