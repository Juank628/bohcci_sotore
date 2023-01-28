import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setProducts } from '../features/products/productsSlice'
import {Routes, Route} from 'react-router-dom'
import { apiURL } from '../utilities/parameters'
import NavMenu from '../components/NavMenu/NavMenu'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Home from './home';
import Product from './product';
import Cart from './cart';
import "./root.scss"

export default function Root() {
  const [showMenu, setShowMenu] = useState(false)
  const [homeSection, setHomeSection] = useState('');
  const dispatch = useDispatch();

  const showMenuHandler = (isShow) => setShowMenu(isShow)

  const getProducts = async() => {
    const res = await fetch(apiURL)
    const products = await res.json()
    dispatch(setProducts(products))
  }

  const gotToSection = (section) => {
    setHomeSection(section)
    setTimeout(()=>{
      setHomeSection('')
    },500)
  }

  useEffect(()=>{
    getProducts()
  },[])

  return (
    <div>
        <NavMenu showMenuHandler={showMenuHandler} show={showMenu} goTo={gotToSection} />
        <Navbar showMenuHandler={showMenuHandler} />
        <Routes>
          <Route path="/" element={<Home section={homeSection} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        <Footer />
    </div>
  )
}
