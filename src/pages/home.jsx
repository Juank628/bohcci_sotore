import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { readAllProducts } from '../redux/slices/productsSlice';
import Gallery from '../components/Gallery/Gallery';
import styles from './home.module.scss';

export default function Home({ section }) {
  const { list } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (list.length === 0) {
      dispatch(readAllProducts());
    }
  }, []);

  return (
    <section className={styles.container}>
      <Gallery items={list} section={section} />
    </section>
  );
}

Home.propTypes = {
  section: PropTypes.string.isRequired,
};
