"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import MenuItems from './Menu'
import { useSelector } from 'react-redux'
function Navbar() {
  const [open,setOpen]=useState(false)
  const user = false
  const cart = useSelector(state=>state.cart)
  return (
    <>
    <div className='flex justify-between my-5 lg:px-20 xl:px-40 md:h-24 z-10'>
      <div className=' hidden md:flex items-center gap-4'>
        <div  className='cursor-pointer hover:text-red-500 transition-all duration-600'><Link href="https://aesthetic-mousse-aa4e71.netlify.app">Home Page</Link></div>
        <div className='cursor-pointer hover:text-red-500 transition-all duration-600'><Link href="https://aesthetic-mousse-aa4e71.netlify.app/menu">Menu</Link></div>
        <div className='cursor-pointer hover:text-red-500 transition-all duration-600'><Link href="https://aesthetic-mousse-aa4e71.netlify.app">Contact</Link></div>
      </div>
      <div className='text-blue-400 cursor-pointer transition-all duration-700 hover:text-blue-200' > <Link href="/">Usama Restaurant</Link>   </div>

      {
      !open? 
      (
      <div className='md:hidden cursor-pointer' onClick={()=>setOpen(true)}>
        <Image src='/open.png' alt='open-menu-icon' width={20} height={20}/>
        </div>
      )
      :(
        <div className='md:hidden cursor-pointer' onClick={()=>setOpen(false)}>
          <Image src='/close.png' alt='close-menu-icon' width={20} height={20}/>
        </div>
        )
        }

<div className=' hidden md:flex  items-center gap-4'>

<div className='flex item-center gap-2 cursor-pointer hover:text-red-500 transition-all duration-600'>
  <Image src="/cart.png" alt='cart-icon' width={20} height={20} />
            <Link href="/cart" >Cart <span className='font-bold text-lg'>{cart.length}</span> </Link>
          </div>
          {!user?<div className='cursor-pointer hover:text-red-500 transition-all duration-600'>
            <Link href="/login">Login</Link>
          </div>:<div className='cursor-pointer hover:text-red-500 transition-all duration-600'>
            <Link href="/order">Orders</Link>
          </div>}
          
        
      </div>
      </div>
        {/* nav items in mobile view*/}
         <div className=' md:hidden'>
          {open&&(<MenuItems/>)}
          
          </div>
        
    

    </>
  )
}

export default Navbar

