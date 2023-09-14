import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
function MenuItems() {
  
  const user = false;
  return (
    <div className='md:hidden bg-red-500 w-full text-center transition-all duration-1000'>
          <ul className='text-white transition-opacity duration-1000'>
            <li className='cursor-pointer py-5 text-lg uppercase hover:font-bold text-white-900 hover:text-2xl'><Link href="https://aesthetic-mousse-aa4e71.netlify.app">Home page</Link></li>
            <li className='cursor-pointer py-5 text-lg uppercase hover:font-bold text-white-900 hover:text-2xl'><Link href="https://aesthetic-mousse-aa4e71.netlify.app/menu">Menu</Link></li>
            <li className='cursor-pointer py-5 text-lg uppercase hover:font-bold text-white-900 hover:text-2xl'><Link href="https://aesthetic-mousse-aa4e71.netlify.app">Working hours</Link></li>
            <li className='cursor-pointer py-5 text-lg uppercase hover:font-bold text-white-900 hover:text-2xl'><Link href="https://aesthetic-mousse-aa4e71.netlify.app">contact</Link></li>
            <li className='cursor-pointer py-5 text-lg uppercase hover:font-bold text-white-900 hover:text-2xl'>
              {!user?<Link href="https://aesthetic-mousse-aa4e71.netlify.app/login">login</Link>:<Link href="/order">order</Link>}
            
              </li>
            <li className='cursor-pointer py-5 text-lg uppercase flex items-center justify-center hover:font-bold text-white-900 hover:text-2xl'>
              <div className='text-center'>
                <Image src='/cart.png' alt='cart-menu-icon' width={20} height={20}/>
              </div>
              <Link href="https://aesthetic-mousse-aa4e71.netlify.app/cart">cart</Link>
              </li>
          </ul>

        </div>
  )
}

export default MenuItems