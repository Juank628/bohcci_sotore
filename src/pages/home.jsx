import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styles from './home.module.scss';
import Gallery from '../components/Gallery/Gallery';

export default function Home({ section }) {
  const { list } = useSelector((store) => store.products);

  return (
    <section className={styles.container}>
      <Gallery items={list} section={section} />
    </section>
  );
}

Home.propTypes = {
  section: PropTypes.string.isRequired,
};
