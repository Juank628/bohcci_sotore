import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setProducts } from '../features/products/productsSlice'
import {Outlet} from 'react-router-dom'
import { apiURL } from '../utilities/parameters'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
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
        <Outlet />
        <Footer />
    </div>
  )
}
