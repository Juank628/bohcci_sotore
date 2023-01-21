import React from 'react';
import styles from './Gallery.module.scss';
import Card from '../Card/Card';

export default function Gallery(props) {
  const { items } = props;

  return (
    <section className={styles.mainContainer}>

      <div className={styles.familyContainer}>
        <h2 className={styles.familyTitle}>- SALIDAS ADULTO -</h2>
        {items.map((item, index) => {
          if (item.family === 'salidas adulto') {
            return <Card key={index} data={item} />;
          }
        })}
      </div>

      <div className={styles.familyContainer}>
        <h2 className={styles.familyTitle}>- SALIDAS MAMÁ HIJA -</h2>
        {items.map((item, index) => {
          if (item.family === 'salidas mama hija') {
            return <Card key={index} data={item} />;
          }
        })}
      </div>

    </section>
  );
}
