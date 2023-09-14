import React from 'react'
import { menu } from '../components/data'
import Link from 'next/link'
export const metadata ={
  title:"menu"
}
function MenuPage() {
  return (
    <div className='p-4 lg:px-20 xl:px-40  flex flex-col md:flex-row items-center md:h-[calc(100vh-9rem)] lg:h-[calc(100vh-12rem)]'>
    
      
      {
        menu.map((category)=>{
          return(
            <Link href={`/menu/${category.slug}`} key={category.id} className='w-full h-1/3 bg-cover p-8 md:h-1/2' style={{backgroundImage:`url(${category.img})`}}>
              <div className={`text-${category.color} w-1/2`}>
                <h1 className='upper-case font-bold text-4xl'>{category.title}</h1>
                <p className='text-sm my-5'>{category.desc}</p>
                <button className='bg-red-500 m-5 p-2 rounded-md transition-all duration-700 text-lg hover:text-xl hover:bg-red-600'>Explore</button>
              </div>
            </Link>
          )
        })
      }
      
      </div>
  )
}

export default MenuPage