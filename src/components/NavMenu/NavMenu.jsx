import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import closeIconlight from '../../assets/icons/close_icon_light.png';
import styles from './NavMenu.module.scss';

export default function NavMenu({ show, showMenuHandler, goTo }) {
  const closeMenu = () => {
    showMenuHandler(false);
  };

  const goToSection = (section) => {
    goTo(section);
    closeMenu();
  };

  return (
    <>
      {show ? (
        <nav className={styles.mainContainer}>
          <button type="button" className={styles.closeContainer} onClick={closeMenu}>
            <img className={styles.close} src={closeIconlight} alt="close" />
          </button>
          <ul>
            <li className={styles.link}>
              <Link to="/" onClick={() => goToSection('section-1')} className={styles.linkText}>SALIDAS ADULTO</Link>
            </li>
            <li className={styles.link}>
              <Link to="/" onClick={() => goToSection('section-2')} className={styles.linkText}>SALIDAS KIDS</Link>
            </li>
            <li className={styles.link}>
              <Link to="/" onClick={() => goToSection('section-3')} className={styles.linkText}>SALIDAS MAMÁ HIJA</Link>
            </li>
            <li className={styles.link}>
              <Link to="/" onClick={() => goToSection('section-4')} className={styles.linkText}>PANTALONES</Link>
            </li>
            <li>
              <hr />
            </li>
            <li className={styles.link}>
              <Link to="/cart" onClick={closeMenu} className={styles.linkText}>CARRITO</Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </>
  );
}

NavMenu.propTypes = {
  show: PropTypes.bool.isRequired,
  showMenuHandler: PropTypes.func.isRequired,
  goTo: PropTypes.func.isRequired,
};
