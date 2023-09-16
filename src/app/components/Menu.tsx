import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux';
function MenuItems({open,setOpen}) {
   const cart = useSelector(state=>state.cart)
  const user = false;
  return (
    <div className='md:hidden bg-red-500 w-full text-center transition-all duration-1000'>
          <ul className='text-white transition-opacity duration-1000'>
            <li className='cursor-pointer py-5 text-lg uppercase hover:font-bold text-white-900 hover:text-2xl'><Link onClick={()=>setOpen(false)} href="/">Home page</Link></li>
            <li className='cursor-pointer py-5 text-lg uppercase hover:font-bold text-white-900 hover:text-2xl'><Link onClick={()=>setOpen(false)} href="/menu">Menu</Link></li>
            <li className='cursor-pointer py-5 text-lg uppercase hover:font-bold text-white-900 hover:text-2xl'><Link onClick={()=>setOpen(false)} href="/">Working hours</Link></li>
            <li className='cursor-pointer py-5 text-lg uppercase hover:font-bold text-white-900 hover:text-2xl'><Link onClick={()=>setOpen(false)} href="/">contact</Link></li>
            <li className='cursor-pointer py-5 text-lg uppercase hover:font-bold text-white-900 hover:text-2xl'>
              {!user?<Link onClick={()=>setOpen(false)} href="/login">login</Link>:<Link onClick={()=>setOpen(false)} href="/order">order</Link>}
            
              </li>
            <li className='cursor-pointer py-5 text-lg uppercase flex items-center justify-center hover:font-bold text-white-900 hover:text-2xl'>
              <div className='text-center'>
                <Image src='/cart.png' alt='cart-menu-icon' width={20} height={20}/>
              </div>
              <Link onClick={()=>setOpen(false)} href="/cart">cart ( {cart.length} )</Link>
              </li>
          </ul>

        </div>
  )
}

export default MenuItems