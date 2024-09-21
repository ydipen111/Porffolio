import { Button, Input, Textarea } from '@material-tailwind/react'
import React from 'react'

export default function Contact() {
  return (
    <div className='  px-[17%] py-10'>
      <div className=' py-10  space-y-5 px-14 ssm:px-6'>
        <h1 className='text-4xl mmd:text-3xl font-bold gap-4 tracking-wider text-center font-sans ssm:tracking-widie '>
          CONTACT
        </h1>
        <div className='flex justify-center pb-2 bg-white-800 '>
          <label className="border-b-[8px]  rounded-md w-8  border-customPurple" htmlFor=""></label>
        </div>
        <p className='text-xl text-center font-sans'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>

        <div className='space-y-4 py-10 pt-10 bg-white px-10 rounded-md'>
          <Input
            label='Name'
            className='py-10 placeholder-ndasd' />


          <Input
            label='Contact' />
          <Input
            label='Gmail' />
          <Textarea
            label='Message for me' />

          <Button>Submit</Button>
        </div>

      </div>



    </div>
  )
}
