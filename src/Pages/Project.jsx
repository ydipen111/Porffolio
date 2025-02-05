import React from 'react'
import land from './../assets/land.png'
import daraz from './../assets/dar.png'
import sara from './../assets/saraPrakashan.png'

export default function Project() {
  return (
    <div className='px-4 py-7 '>
      <h1 className='tracking-wider text-3xl font-bold text-center mb-3'>PROJECTS</h1>
      <div className='flex justify-center '>
        <label className="border-b-[8px]  rounded-md w-8  border-customPurple" htmlFor=""></label>
      </div>

      <p className='text-center font-medium text-gray-700 tracking-wide text-lg ssm:text-start py-2 '>Here you will find some of the personal and clients projects that I created with each project containing its own case study
      </p>
      {/* project image with code and project link */}
      <div className='grid grid-cols-2 gap-10  ssm:gap-4 mt-4 ssm:px-0'>

        <div className='col-span-2 flex flex-row justify-evenly  mmd:flex-col px-10 ssm:px-5 gap-4'>
          <div className='w-full rounded-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-1.05'>
            <a href="https://saraprakashan.com/">
              <img
                className=' bg-cover object-contain w-full'
                src={sara} alt="" />
            </a>

          </div>
          <div className='px-10 w-full space-y-2 pt-5 shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-1.08  '>
            <h1 className='font-semibol text-2xl font-sans'>Sara Prakashan</h1>

            <p className='text-gray-800 font-sans text-lg'>I have developed a fully functional Saraprakashan project using Next.js with a single frontend. It includes 12 APIs and features RTK Query, RTK Mutation, and Inject Query for efficient state management. The platform supports Nepali to English translation. It also has distinct roles for buyers, users, and admin. The frontend ensures a seamless user experience with smooth data fetching and updates. This project is designed for scalability and high performance.</p>
            <div className='flex space-x-3  '>

              <a
                className='text-start'
                href="">GitHub</a>

              <a href="https://saraprakashan.com/">Project</a>
            </div>


          </div>
        </div>
        <div className='col-span-2 flex flex-row  justify-evenly  mmd:flex-col px-10 ssm:px-5 gap-4'>
          <div className=' transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-1.05 rounded-lg w-full'>
            <a href="https://front-5656.vercel.app/">
              <img
                className='bg-cover object-contain w-full'
                src={daraz} alt="" />
            </a>

          </div>
          <div className=' transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-1.05 px-10 w-full space-y-2 pt-5 shadow-xl  '>
            <h1 className='font-semibol text-2xl font-sans'> Ecommerce-website</h1>

            <p className='text-gray-800 font-sans text-lg'>I have built a fully functional Daraz clone using the MERN stack with RTK Query, RTK Mutation, and Tailwind CSS. The frontend is developed with pure React for a smooth user experience. It includes two types of users: buyers and sellers. There are also two admin roles to manage the platform. Buyers can browse and purchase products, while sellers can list and manage their inventory. The backend is powered by Node.js, Express, and MongoDB. This project delivers a complete e-commerce solution. </p>
            <div className='flex space-x-3  '>

              <a
                className='text-start'
                href="https://github.com/ydipen111/front">GitHub</a>

              <a href="https://front-5656.vercel.app/">Project</a>
            </div>


          </div>
        </div>


        <div className='col-span-2 flex flex-row justify-evenly  mmd:flex-col px-10 ssm:px-5 gap-4'>


          <div className='w-full'>
            <a href="">
              <img
                className='bg-cover object-contain w-full'
                src={land} alt="" />
            </a>

          </div>

          <div className='px-10 w-full space-y-2 pt-5 shadow-xl  '>
            <h1 className='font-semibol text-2xl font-sans'>Description</h1>

            <p className='text-gray-800 font-sans text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis inventore quam corporis ullam aspernatur, consectetur obcaecati praesentium excepturi eum explicabo animi est esse ut beatae aliquam. Ea, perferendis! Ipsum, natus!</p>

            <div className='flex space-x-3  '>

              <a
                className='text-start'
                href="">GitHub</a>

              <a href="">Project</a>
            </div>


          </div>

        </div>

      </div>

    </div>
  )
}
