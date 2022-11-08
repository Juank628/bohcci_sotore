import React from 'react'
import styles from './Footer.module.css'
import logo_lg from '../../assets/logos/logo_lg.jpg'
import whatsapp_icon from '../../assets/icons/whatsapp_icon.png'
import instagram_icon from "../../assets/icons/instagram_icon.png"

export default function Footer() {
  return (
    <section className={styles.container}>
        <hr className={styles.footer_line} />
        <img className={styles.logo} src={logo_lg} alt="logo_lg" />
        <div className={styles.links}>
            <a className={styles.link} href="#">
                <img src={instagram_icon} alt="" />
                <p>@Bohcci</p>
            </a>
            <a className={styles.link} href="#">
                <img src={whatsapp_icon} alt="" />
                <p>999999999</p>
            </a>
        </div>
    </section>
  )
}
