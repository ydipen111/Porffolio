import React from 'react'
import Food from './Food'
import { FaFacebook, FaGithubAlt, } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons'

export default function Home() {
  return (
    <div className='bg-soft-black flex flex-row   md:pr-56 ssm:flex-col ssm:flex-reverse pr-0 mr-0   '>
      {/* social media link */}

      <div className='m:hidden px-3 py-7 flex flex-col justify-center ssm:flex-row'>
        <ul className='space-y-6 bg-white px-3 py-7 rounded-md ssm:hidden shadow-lg ' >
          <li className='text-4xl'><SocialIcon url='https://www.linkedin.com/in/dipendra-yesmali-magar-50007b262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' /></li>

          <li className='text-4xl'><SocialIcon url='https://x.com/MagaraYasmali?t=cushL9NBtwRR-t9E_MiQHw&s=09' /></li>
          <li><SocialIcon url="https://github.com/ydipen111" /> </li>

          <li className='text-4xl'><SocialIcon url='https://www.facebook.com/dipendrayesmali.magar.1' /></li>


          <li className='text-xl '><SocialIcon className='' url='mailto:mgrd08716@gmail.com' /></li>

        </ul>
      </div>

      {/* Genaral information */}
      <div onClick={() => handleScrol(homeRef)} className='mmd:px-0 ssm:py-3 px-5 py-4 text-center space-y-4 flex flex-col justify-center   '>
        <h1 className='text-6xl ssm:px-3  tracking-wide mmd:text-3xl sm:px-7 ssm:text-start font-bold '>HEY, I'M DIPENDRA YESMALI </h1>
        <p className='text-2xl mmd:text-xl ssm:px-3 px-24  font-sans py-7 ssm:py-3 tracking-wide text-start '>A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</p>

        {/* FOR MOBILE SOCIALMDEDIA LINK */}
        <ul className='space-x-6  px-3 py-7 rounded-md hidden ssm:flex shadow-lg  ' >
          <li className='text-4xl h-9 w-9'><SocialIcon
            className=''
            url='https://www.linkedin.com/in/dipendra-yesmali-magar-50007b262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' /></li>

          <li className='text-4xl'><SocialIcon url='https://x.com/MagaraYasmali?t=cushL9NBtwRR-t9E_MiQHw&s=09' /></li>
          <li><SocialIcon url="https://github.com/ydipen111" /> </li>

          <li className='text-4xl'><SocialIcon url='https://www.facebook.com/dipendrayesmali.magar.1' /></li>


          <li className='text-xl '><SocialIcon className='' url='mailto:mgrd08716@gmail.com' /></li>

        </ul>

        <NavLink to="/project-page">
          <button className='bg-customPurple px-14 py-4 rounded-md'><p className='text-white font-bold text-xl '>PROJECTS</p></button>
        </NavLink>
      </div>



    </div>
  )
}
