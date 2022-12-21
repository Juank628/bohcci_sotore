import React from 'react'
import styles from './Card.module.css'
import { useNavigate } from 'react-router-dom'

export default function Card(props) {

  const {data} = props
  const navigate = useNavigate()

  const showProduct = () => navigate(`/product?id=${data.id}`)
  
  return (
    <section onClick={showProduct} className={styles.container}>
        <div className={styles.img_area}>
          <img src={`./photos/products/${data.id}.jpg`} alt="" />
        </div>
        <div className={styles.info}>
            <p className={styles.title}> {data.name}</p>
            <p className={styles.price}> S/{data.price}</p>
        </div>
    </section>
  )
}
