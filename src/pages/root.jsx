import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setProducts } from '../features/products/productsSlice'
import {Routes, Route} from 'react-router-dom'
import { apiURL } from '../utilities/parameters'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Home from './home';
import Shop from './shop';
import Product from './product';
import Cart from './cart';
import "./root.scss"

export default function Root() {
  const dispatch = useDispatch();

  const getProducts = async() => {
    const res = await fetch(apiURL)
    const products = await res.json()
    dispatch(setProducts(products))
  }

  useEffect(()=>{
    getProducts()
  },[])

  return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        <Footer />
    </div>
  )
}
