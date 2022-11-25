import React from 'react'
import styles from './CartItem.module.scss'
import close_icon from '../../assets/icons/close_icon.png'
import template_2_3 from '../../assets/photos/covers/template_2_3.jpg'

export default function CartItem() {
  return (
    <section className={styles.container}>
        <div className={styles.photos}>
            <img className={styles.main_photo} src={template_2_3} alt="" />
        </div>
        <div className={styles.info}>
            <div className={styles.close}>
              <img src={close_icon} alt="" />
            </div>
            <p className={styles.title}>Salida Vichayito</p>
            <p className={styles.subtitle}>Talla: M</p>
            <p className={styles.subtitle}>Cantidad: 1</p>
            <p className={styles.subtitle}>Subtotal: S/120</p>
        </div>
    </section>
  )
}
