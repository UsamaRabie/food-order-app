import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='flex items-center justify-center gap-5'>
      <div>  Designed by </div>
      <Link className='font-bold hover:text-orange-500' href="https://usamarabie.github.io/Portfolio/" target='_blank'>© Usama Rabie</Link>
      <p>Aug 2023</p>
    
      </footer>
  )
}

export default Footer