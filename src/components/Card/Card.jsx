import React from 'react'
import styles from './Card.module.css'
import Colorset from '../Colorset/Colorset'

export default function Card() {
  return (
    <div className={styles.container}>
        <img src="https://img.freepik.com/foto-gratis/retrato-joven-mujer-rubia-elegante-sombrero-elegante-sueter-blanco-invierno_273443-2248.jpg?w=360&t=st=1665334696~exp=1665335296~hmac=2896cdd702fc781d34cecba8c36eb4fd4f9cce968270699302f46b218f99f8e7" alt="" />
        <div className={styles.info}>
            <p>Blusa</p>
            <p>S/250</p>
            <Colorset />
        </div>
    </div>
  )
}
