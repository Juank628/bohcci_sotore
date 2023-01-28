import React, { useEffect } from 'react';
import styles from './Gallery.module.scss';
import Card from '../Card/Card';

export default function Gallery(props) {
  const { items, section } = props;
  
  useEffect(()=>{
    console.log(section)
    if (section !== '') {
      setTimeout(()=>{
        const sectionElement = document.getElementById(section);
        sectionElement.scrollIntoView({ behavior: "smooth"});
      }, 500)
    }
  },[section])

  return (
    <section className={styles.mainContainer} id="mainContainer">

      <h2 className={styles.familyTitle} id="section-1">- SALIDAS ADULTO -</h2>
      <div className={styles.familyContainer}>
        {items.map((item, index) => {
          if (item.family === 'salidas adulto') {
            return <Card key={index} data={item} />;
          }
        })}
      </div>

      <h2 className={styles.familyTitle} id="section-2">- SALIDAS MAMÁ HIJA -</h2>
      <div className={styles.familyContainer}>
        {items.map((item, index) => {
          if (item.family === 'salidas mama hija') {
            return <Card key={index} data={item} />;
          }
        })}
      </div>

    </section>
  );
}
