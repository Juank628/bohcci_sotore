import React from "react";
import styles from "./product.module.scss";
import template_2_3 from "../assets/photos/covers/template_2_3.jpg";

export default function Product() {
  return (
    <section className={styles.container}>
      <img className={styles.main_photo} src={template_2_3} alt="" />
      <h2 className={styles.title}>Salida Vichayito - Verde</h2>
      <p className={styles.price}>S/120</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quaerat
        ratione cupiditate corporis aliquam! Consectetur veritatis quod
        recusandae. Rerum, fuga officiis consequuntur voluptatem adipisci et
        necessitatibus iusto quaerat consectetur deleniti.
      </p>
      <p className={styles.subtitle}>Talla</p>
      <ul className={styles.sizes_list}>
        <li className={styles.size}>S</li>
        <li className={styles.size}>M</li>
        <li className={styles.size}>L</li>
      </ul>
      <button className={styles.btn_wide}>Agregar al carrito</button>
    </section>
  );
}
