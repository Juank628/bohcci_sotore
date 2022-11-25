import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom'
import './assets/style/normalize.css'
import Root from './pages/root'
import Home from './pages/home'
import Shop from './pages/shop'
import Product from './pages/product'
import Cart from './pages/Cart'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "product",
        element: <Product />
      },
      {
        path: "cart",
        element: <Cart />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
