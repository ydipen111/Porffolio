import React from 'react'
import Header from './Pages/Header'
import { Outlet } from 'react-router-dom'
import OnePage from './OnePage'

export default function Rootlayout() {
  return (
    <div className=''>
      <Header />
      {/* <OnePage /> */}
      <Outlet />

    </div>
  )
}
