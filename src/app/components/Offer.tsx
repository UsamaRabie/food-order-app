import Image from 'next/image'
import React from 'react'

function Offer() {
  return (
    <div className='bg-black h-screen py-5 my-5 flex flex-col  md:flex-row   md:bg-[url("/offerBg.png")] '>
      {/** text container */}
      <div className='flex flex-col items-center my-5 flex-1 justify-center'>
          <h1 className='text-white text-2xl md:text-3xl my-3 text-center'>Delicious Burger & French Fry</h1>
          <p className='text-white text-lg my-3 text-center'>Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.</p>
          <button className='text-white text-md bg-red-500 rounded-md p-2 my-3 transition-all duration-700 hover:bg-red-600 hover:text-xl '>Order Now</button>
      </div>
      {/**img container */}
      <div className='w-full relative flex flex-1'>
      <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  )
}

export default Offer