import React from 'react'
import Food from './Food'
import { FaFacebook, FaGithubAlt, } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className='bg-soft-black flex justify-between px-4 ssm:justify-center 
    
    md:pr-56 h-screen  '>
      <div className='ssm:hidden bg-white px-3 py-7 '>
        <ul className='space-y-6 h-28' >
          <li className='text-4xl'>< FaLinkedin /></li>
          <li className='text-4xl'><FaGithubAlt /></li>
          <li className='text-4xl'><FaXTwitter /></li>
          <li className='text-4xl'><FaFacebook /></li>
          <li className='text-4xl'><SiGmail /></li>
        </ul>
      </div>
      <div className='ssm:px-4 px-5 py-4 text-center space-y-4 '>
        <h1 className='text-6xl font-bold tracking-wide ssm:text-4xl'>HEY, I'M DIPENDRA YESMALI </h1>
        <p className='text-2xl ssm:text-xl ssm:px-3 px-24  font-medium py-7 tracking-wide'>A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</p>
        <NavLink to="/project-page">
          <button className='bg-customPurple px-7 py-3 rounded-md'><p className='text-white font-bold text-xl '>PROJECTS</p></button>
        </NavLink>
      </div>



    </div>
  )
}
