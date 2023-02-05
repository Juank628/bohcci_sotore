import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { readAllProducts } from '../redux/slices/productsSlice';
import NavMenu from '../components/NavMenu/NavMenu';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Home from './home';
import Product from './product';
import Cart from './cart';
import './root.scss';

export default function Root() {
  const [showMenu, setShowMenu] = useState(false);
  const [homeSection, setHomeSection] = useState('');
  const dispatch = useDispatch();

  const getProducts = async () => {
    dispatch(readAllProducts());
  };

  const showMenuHandler = (isShow) => setShowMenu(isShow);

  const gotToSection = (section) => {
    setHomeSection(section);
    setTimeout(() => {
      setHomeSection('');
    }, 500);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Navbar showMenuHandler={showMenuHandler} goTo={gotToSection} />
      <NavMenu showMenuHandler={showMenuHandler} show={showMenu} goTo={gotToSection} />
      <Routes>
        <Route path="/" element={<Home section={homeSection} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}
