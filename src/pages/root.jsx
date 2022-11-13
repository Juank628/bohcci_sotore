import React from 'react'
import "./root.scss"
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

export default function Root() {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}
