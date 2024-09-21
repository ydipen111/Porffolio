import React from 'react'

export default function About() {
  return (
    <div className=' py-10  space-y-5 px-14 ssm:px-6'>
      <h1 className='text-4xl mmd:text-3xl font-bold gap-4 tracking-wider text-center font-sans ssm:tracking-widie '>
        ABOUT PAGE
      </h1>
      <div className='flex justify-center pb-2'>
        <label className="border-b-[8px]  rounded-md w-8  border-customPurple" htmlFor=""></label>
      </div>
      <p className='text-xl mmd:text-lg font-medium text-gray-700 px-[250px] llg:px-36 mmd:px-8 text-center font-sans ssm:text-start'>
        Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
      </p>
      <div className='grid grid-cols-2 pt-[80px] gap-20 ssm:pt-[40px]'>
        <div className='col-span-1 mmd:col-span-2'>
          <h1 className='text-3xl font-bold px-2'>Get to know me!



          </h1>
          {/* My introduction */}
          <p className='text-xl mmd:text-lg text-gray-700 leading-loose pt-7'>
            I am a <span className='font-semibold'> MERN Stack Developer </span>with a passion for crafting exceptional web experiences. I specialize in building and managing the Fullstack  websites and web applications, leveraging the power of <span className='font-semibold tracking-wide'> MongoDB, Express.js, React, React Native, flutter and Node.js </span> to create dynamic, responsive applications that truly resonate with users. My work is driven by a commitment to excellence and a desire to contribute to the success of every project I undertake. <br />
            I have a growing interest in Artificial Intelligence and its potential to transform the tech landscape. I enjoy exploring how AI can enhance user experiences and streamline processes, and I’m excited about the possibilities it brings to web development. <br /> <br />
            Beyond coding, I believe in the power of sharing knowledge. I love to document and share insights from my journey in web development, hoping to inspire and assist others in the developer community. Join me on
            <a className='text-xl text-blue-700' href="https://www.linkedin.com/in/dipendra-yesmali-magar-50007b262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> LinkedIn</a>, &nbsp; <a className='text-xl text-blue-700' href="https://www.facebook.com/dipendrayesmali.magar.1">Facebook</a>, &nbsp;
            <a className='text-xl text-black font-bold' href="https://x.com/MagaraYasmali?t=cushL9NBtwRR-t9E_MiQHw&s=09">x</a> &nbsp;
            <a className='text-xl font-bold text-black' href="https://github.com/ydipen111">Github</a> and &nbsp;

            <a className='text-xl font-bold text-black ' href="mailto:mgrd08716@gmail.com">Gmail</a> &nbsp;


            and Instagram, where I regularly post valuable content related to web development, programming, and AI, fostering a culture of learning and growth. <br /> <br />
            I am always open to new opportunities that challenge me to grow, contribute, and make a meaningful impact. If you have an exciting opportunity that aligns with my skills and experience, I would love to connect. Let’s create something amazing together! This version incorporates your interest in AI while maintaining an authentic and motivational tone. Feel free to make any adjustments to better reflect your personal style!
          </p>
        </div>
        <div className='col-span-1 mmd:col-span-2 ssm:py-7  '>

          <h1 className='text-black font-bold text-3xl ssm:py-4'>
            My skills
          </h1>

          <div>

          </div>





          <ul className='pr-3 flex flex-wrap gap-3 my-2 ssm:px-0'> {/* Adjusted margin and used gap */}
            <li className='text-gray-900 bg-gray-300 inline text-lg mmd:text-lg rounded-md px-4 py-2'>C++</li>
            <li className='text-gray-900 bg-gray-300 inline text-lg mmd:text-lg rounded-md px-4 py-2'>JAVASCRIPT</li>
            <li className='text-gray-900 bg-gray-300 inline text-lg mmd:text-lg rounded-md px-4 py-2'>React</li>

            <li className='text-gray-900 bg-gray-300 inline text-lg mmd:text-lg rounded-md px-4 py-2'>React-native</li>
            <li className='text-gray-900 bg-gray-300 inline text-lg mmd:text-lg rounded-md px-4 py-2'>FLutter</li>
            <li className='text-gray-900 bg-gray-300 inline text-lg mmd:text-lg rounded-md px-4 py-2'>MONGODB</li>
            <li className='text-gray-900 bg-gray-300 inline text-lg mmd:text-lg rounded-md px-4 py-2'>EXPRESS</li>
            <li className='text-gray-900 bg-gray-300 inline text-lg mmd:text-lg rounded-md px-4 py-2'>NODEJS</li>
            <li className='text-gray-900 bg-gray-300 inline text-lg mmd:text-lg rounded-md px-4 py-2'>Github</li>
            <li className='text-gray-900 bg-gray-300 inline text-lg mmd:text-lg rounded-md px-4 py-2 font-semibold'>Responsive</li>
            <li className='text-gray-900 bg-gray-300 inline text-lg mmd:text-lg rounded-md px-4 py-2'>Figma design</li>


            <li className='text-gray-900 bg-gray-300 inline text-lg mmd:text-lg rounded-md px-4 py-2'>HTML</li>
            <li className='text-gray-900 bg-gray-300 inline text-lg mmd:text-lg rounded-md px-4 py-2'>CSS</li>
            <li className='text-gray-900 bg-gray-300 inline text-lg mmd:text-lg rounded-md px-4 py-2'>TAILWIND CSS</li>
            <li className='text-gray-900 bg-gray-300 inline text-lg mmd:text-lg rounded-md px-4 py-2'>MATERIAL UI</li>
            <li className='text-gray-900 bg-gray-300 inline text-lg mmd:text-lg rounded-md px-4 py-2'>BOOTSTRAP</li>
          </ul>
        </div>

      </div>

    </div>
  )
}
