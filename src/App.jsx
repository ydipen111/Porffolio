import React, { useState } from 'react'
import Header from './Pages/Header'
import { Product } from './Components/Product'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Rootlayout from './Rootlayout'
import Home from './Pages/Home'
import Project from './Pages/Project'
import About from './Pages/About'
import Contact from './Pages/Contact'

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
      path: 'home-page',
      element: <Home />
    },
    {
      path: 'contact-page',
      element: <Contact />
    },
    {
      path: 'about-page',
      element: <About />
    },
    {
      path: 'project-page',
      element: <Project />
    },
    ]
  }])
  return <RouterProvider router={router} />
}
