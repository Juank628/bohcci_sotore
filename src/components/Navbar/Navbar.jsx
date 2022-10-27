import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'
import logo_sm from '../../assets/logo_sm.jpg'
import cart_icon from '../../assets/cart_icon.png'

export default function Navbar() {
  return (
    <div className={styles.container}>
        <img src={logo_sm} alt="" className={styles.logo} />
        <ul className={styles.menu}>
            <li><Link to={'home'}>HOME</Link></li>
            <li><Link to={'shop'}>SHOP</Link></li>
            <li><Link to={'sale'}>SALE</Link></li>
            <li><Link to={'collections'}>BOHCCI</Link></li>
        </ul>
        <img src={cart_icon} alt="" className={styles.cart} />
    </div>
  )
}
