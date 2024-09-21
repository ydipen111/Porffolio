import React from 'react'
import land from './../assets/land.png'

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
        </div> <div className='col-span-2 flex flex-row justify-evenly  mmd:flex-col px-10 ssm:px-5 gap-4'>


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
