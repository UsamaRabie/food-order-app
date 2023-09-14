"use client"
import { pizzas } from '@/app/components/data';
import Image from 'next/image';
import Link from 'next/link';
import { burgers } from '@/app/components/data';
import { pastas } from '@/app/components/data';
import React ,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '@/app/redux_toolkit/slices/cart/cartSlice'



function MenuCategoryPage({params}) {
  const [quantity , setQuantity]=useState(1)
  const [selected , setSelected]=useState(0)
  const cart = useSelector(state=>state.cart)
  const dispatch = useDispatch()
  return (
    <> 
     <div className='text-center text-3xl font-bold text-red-500 mb-20'>Category {params.categories}</div>
      <div className='flex flex-wrap '>
        {
          params.categories==="pizzas" && (
            pizzas.map((item)=>{
              return(
                <Link className='w-full md:w-1/2 lg:w-1/3 h-[60vh] border-2 border-red-500 m-auto group transition-all duration-700 odd:bg-fuchsia-100 even:bg-fuchsia-200' key={item.id} 
                href={`https://aesthetic-mousse-aa4e71.netlify.app/pizzas/${item.id}`}
                >
  
                {/**Image */}
                <div className='relative h-[70%]'>
                  {item.img && <Image src={item.img} alt={item.title} fill className="object-contain hover:rotate-45 transition-all duration-700"/>}
                </div>
  
                {/**text */}
                <div className='flex items-center justify-around mt-12'>
                  <h1 className='font-bold '>{item.title}</h1>
                  <p className='font-bold text-lg'>{item.price} $</p>
                  <button onClick={()=>dispatch(addToCart({item , quantity : 1 , totPrice:item.price }))} className='block lg:hidden  bg-red-500 rounded-md p-2 text-white text-sm hover:text-lg group-hover:block transition-all duration-700'>add to cart</button>
                </div>
                </Link>
              )
            })
          )
        }

        {
            params.categories==="burgers"&&(
              burgers.map((item)=>{
                return(
                  <Link className='w-full md:w-1/2 lg:w-1/3 h-[60vh] border-2 border-red-500 m-auto group transition-all duration-700 odd:bg-fuchsia-100 even:bg-fuchsia-200' key={item.id} 
                  href={`https://aesthetic-mousse-aa4e71.netlify.app/burgers/${item.id}`}
                  
                  >
    
                  {/**Image */}
                  <div className='relative h-[70%]'>
                    {item.img && <Image src={item.img} alt={item.title} fill className="object-contain hover:rotate-45 transition-all duration-700"/>}
                  </div>
    
                  {/**text */}
                  <div className='flex items-center justify-around mt-12'>
                    <h1 className='font-bold '>{item.title}</h1>
                    <p className='font-bold text-lg'>{item.price} $</p>
                    <button onClick={()=>dispatch(addToCart({item , quantity : 1 , totPrice:item.price }))}  className=' block lg:hidden  bg-red-500 rounded-md p-2 text-white text-sm hover:text-lg group-hover:block transition-all duration-700'>add to cart</button>
                  </div>
                  </Link>
                )
              })
            )
        }


        {
            params.categories==="pastas"&&(
              pastas.map((item)=>{
                return(
                  <Link className='w-full md:w-1/2 lg:w-1/3 h-[60vh] border-2 border-red-500 m-auto group transition-all duration-700 odd:bg-fuchsia-100 even:bg-fuchsia-200' 
                  key={item.id} href={`https://aesthetic-mousse-aa4e71.netlify.app/pastas/${item.id}`}
                  >
    
                  {/**Image */}
                  <div className='relative h-[70%]'>
                    {item.img && <Image src={item.img} alt={item.title} fill className="object-contain hover:rotate-45 transition-all duration-700"/>}
                  </div>
    
                  {/**text */}
                  <div className='flex items-center justify-around mt-12'>
                    <h1 className='font-bold '>{item.title}</h1>
                    <p className='font-bold text-lg'>{item.price} $</p>
                    <button onClick={()=>dispatch(addToCart({item , quantity : 1 , totPrice:item.price }))}  className=' block lg:hidden  bg-red-500 rounded-md p-2 text-white text-sm hover:text-lg group-hover:block transition-all duration-700'> add to cart</button>
                  </div>
                  </Link>
                )
              })
            )
        }
      </div>
      
    </>
  
  )
}

export default MenuCategoryPage
