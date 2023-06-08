import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import Card from '../Card/Card';

export default function Gallery(props) {
  const { items, section } = props;

  useEffect(() => {
    if (section !== '') {
      const sectionElement = document.getElementById(section);
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [section]);

  return (
    <section className={styles.mainContainer} id="mainContainer">

      <h2 className={styles.familyTitle} id="section-1">- SALIDAS ADULTO -</h2>
      <div className={styles.familyContainer}>
        {items.map((item) => {
          if (item.family === 'salidas adulto') {
            return <Card key={item.id} data={item} />;
          }
          return null;
        })}
      </div>

      <h2 className={styles.familyTitle} id="section-2">- SALIDAS KIDS -</h2>
      <div className={styles.familyContainer}>
        {items.map((item) => {
          if (item.family === 'salidas kids') {
            return <Card key={item.id} data={item} />;
          }
          return null;
        })}
      </div>

      <h2 className={styles.familyTitle} id="section-3">- SALIDAS MAMÁ HIJA -</h2>
      <div className={styles.familyContainer}>
        {items.map((item) => {
          if (item.family === 'salidas mama hija') {
            return <Card key={item.id} data={item} />;
          }
          return null;
        })}
      </div>

      <h2 className={styles.familyTitle} id="section-4">- PANTALONES -</h2>
      <div className={styles.familyContainer}>
        {items.map((item) => {
          if (item.family === 'pantalones') {
            return <Card key={item.id} data={item} />;
          }
          return null;
        })}
      </div>

    </section>
  );
}

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    family: PropTypes.string.isRequired,
  })).isRequired,
  section: PropTypes.string.isRequired,
};
