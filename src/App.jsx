import React, { useState } from 'react'
import Header from './Pages/Header'
import { Product } from './Components/Product'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Rootlayout from './Rootlayout'
import Home from './Pages/Home'
import Blank from './Pages/Blank'

export default function App() {
  useState()
  const router = createBrowserRouter([{
    path: '/',
    element: <Rootlayout />,
    children: [{
      index: true,
      element: <Home />
    },
    {
      path:'home',
      element:<Home/>
    },
    {
      path:'recepie',
      element:<Blank/>
    },
    {
      path:'services',
      element:<Blank/>
    }
    ]
  }])
  return <RouterProvider router={router}/>
}
