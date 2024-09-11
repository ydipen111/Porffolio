import React, { useRef } from 'react'
import Home from './Pages/Home'
import Project from './Pages/Project'
import Contact from './Pages/Contact'
import About from './Pages/About'

export default function OnePage() {
  const Homeref = useRef(null)
  const Projectref = useRef(null)
  const ContactRef = useRef(null)
  const AboutRef = useRef(null)

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div>
      <ul className='flex justify-between py-4 '>
        <li onClick={() => { handleScroll(Homeref) }} className='text-xl'>home</li>
        <li onClick={() => { handleScroll(Projectref) }} className='text-xl'>porject</li>
        <li onClick={() => { handleScroll(ContactRef) }} className='text-xl'>contact</li>
        <li onClick={() => { handleScroll(AboutRef) }} className='text-xl'>about</li>
      </ul>


      <ul>
        <li ref={Homeref} className='bg-'>    <Home /> </li>
        <li ref={Projectref} className='bg-red-300'><Project /> </li>
        <li ref={ContactRef} className='bg-back-400'> <Contact /> </li>
        <li ref={AboutRef} className='bg-yellow-300'> <  About /> </li>
      </ul>

    </div>
  )
}
