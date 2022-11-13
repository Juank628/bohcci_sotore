import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo_sm from "../../assets/logos/logo_sm.jpg";
import cart_icon from "../../assets/icons/cart_icon.png";
import menu_icon from "../../assets/icons/menu_icon.png"

export default function Navbar() {
  return (
    <header>
      <div className={styles.mobile_container}>
        <img src={menu_icon} alt="" className={styles.menu} />
        <img src={logo_sm} alt="" className={styles.logo} />
        <img src={cart_icon} alt="" className={styles.cart} />
      </div>
    </header>
  );
}
