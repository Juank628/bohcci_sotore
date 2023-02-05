import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import logoLg from '../../assets/logos/logo_lg.jpg';
import whatsappIcon from '../../assets/icons/whatsapp_icon.png';
import instagramIcon from '../../assets/icons/instagram_icon.png';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.logo_container}>
        <img className={styles.logo} src={logoLg} alt="logo_lg" />
      </div>
      <Link className={styles.insta_link} to="/">
        <img src={instagramIcon} alt="" />
        <p>@Bohcci</p>
      </Link>
      <Link className={styles.wsp_link} to="/">
        <img src={whatsappIcon} alt="" />
        <p>999999999</p>
      </Link>
    </footer>
  );
}
