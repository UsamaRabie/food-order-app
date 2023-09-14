"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function Slider() {
  const data = [
    {id:1 , caption:"Always fresh always crispy" , img:"/slide1.svg"},
    {id:2 , caption:"We deliver your order wherever you are in " , img:"/slide2.svg"},
    {id:3 , caption:"The best pizza to share with your family" , img:"/slide3.svg"},
    {id:4 , caption:"food is always fresh and healthy" , img:"/slide4.svg"},
    {id:5 , caption:"We have the most skilled chefs in the world" , img:"/slide5.svg"},
    {id:6 , caption:"We have ice cream with different flavors" , img:"/slide6.svg"},
    {id:7 , caption:"We are ready to host your special occasions" , img:"/slide7.svg"},
    {id:8 , caption:"We have delicious breakfasts too" , img:"/slide8.svg"},
  ]
  const [index , setIndex]=useState(0)
  useEffect(()=>{
    const interval = setInterval( ()=>{
      setIndex( (prev)=> prev===data.length -1 ? 0 : prev+1)
    },2000 )
    return ()=> clearInterval(interval)
  }
  ,[])
  return (
    <div className='bg-fuchsia-50 flex flex-col-reverse h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] md:flex-row my-5 '>
      <div className='h-1/2 flex gap-5 flex-col items-center justify-center md:h-full md:w-1/2'>
        <h1 className='text-red-500 text-center font-bold text-xl md:text-3xl'>{data[index].caption}</h1>
        <button className='text-white bg-red-500 py-4 px-8 rounded-md  font-bold text-lg md:text-2xl  hover:bg-red-600 hover:text-3xl transition-all duration-700'>Order Now!</button>
      </div>
      <div className='h-1/2 w-full relative  md:h-full md:w-1/2'>
        <Image src={data[index].img} fill  alt="slide-Img" className='object-contain'/>
      </div>
    </div>
  )
}

export default Slider