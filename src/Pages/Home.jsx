import React from 'react'
import Food from './Food'
import { FaFacebook, FaGithubAlt, } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons'

export default function Home() {
  return (
    <div className='bg-soft-black flex justify-between px-4 ssm:justify-center 
    
    md:pr-56 h-screen  '>
      <div className='m:hidden px-3 py-7 flex flex-col justify-center'>
        <ul className='space-y-6 bg-white px-3 py-7   ' >
          <li className='text-4xl'><SocialIcon url='https://www.linkedin.com/in/dipendra-yesmali-magar-50007b262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' /></li>

          <li className='text-4xl'><SocialIcon url='https://x.com/MagaraYasmali?t=cushL9NBtwRR-t9E_MiQHw&s=09' /></li>
          <li><SocialIcon url="https://github.com/ydipen111" /> </li>

          <li className='text-4xl'><SocialIcon url='https://www.facebook.com/dipendrayesmali.magar.1' /></li>


          <li className='text-4xl'><SocialIcon url='mailto:mgrd08716@gmail.com' /></li>

        </ul>
      </div>
      <div className='ssm:px-4 px-5 py-4 text-center space-y-4 flex flex-col justify-center '>
        <h1 className='text-6xl font-bold tracking-wide ssm:text-4xl sm:px-7'>HEY, I'M DIPENDRA YESMALI </h1>
        <p className='text-2xl ssm:text-xl ssm:px-3 px-24  font-medium py-7 tracking-wide'>A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</p>
        <NavLink to="/project-page">
          <button className='bg-customPurple px-7 py-3 rounded-md'><p className='text-white font-bold text-xl '>PROJECTS</p></button>
        </NavLink>
      </div>



    </div>
  )
}
