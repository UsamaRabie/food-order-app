import { pizzas , pastas , burgers } from '@/app/components/data'
import Image from 'next/image'
import React from 'react'


export const metadata ={
  title:"product"
}
function SingleProductPage({params}) {
  return (
    <>
    { params.category==="pizzas" &&  ( <>
      <div className='p-4 md:px-20 lg:px-40 flex flex-col items-center h-[100vh] md:h-[] justify-around text-red-500 md:flex-row '>
      {/* Img container */}
      {pizzas[params.id-1].img &&
       (<div className='relative w-full h-1/2  m-x-5 hover:rotate-180 transition-all duration-1000'>
        <Image src={pizzas[params.id-1].img} alt='product-img' fill className='object-contain'/>
      </div>)}
      

      {/** text container */}
      <div>
        <h1 className='font-bold text-4xl text-center mb-5'>{pizzas[params.id-1].title}</h1>
        <p className='text-center mb-5'>{pizzas[params.id-1].desc}</p>
      </div>
    </div>
    
    </>)   }


    { params.category==="burgers" &&  ( <>
      <div className='p-4 md:px-20 lg:px-40 flex flex-col items-center h-[100vh] md:h-[] justify-around text-red-500 md:flex-row '>
      {/* Img container */}
      {burgers[params.id-1].img &&
       (<div className='relative w-full h-1/2  m-x-5 hover:rotate-180 transition-all duration-1000'>
        <Image src={burgers[params.id-1].img} alt='product-img' fill className='object-contain'/>
      </div>)}
      

      {/** text container */}
      <div>
        <h1 className='font-bold text-4xl text-center mb-5'>{burgers[params.id-1].title}</h1>
        <p className='text-center mb-5'>{burgers[params.id-1].desc}</p>
      </div>
    </div>
    
    </>)   }


    
    { params.category==="pastas" &&  ( <>
      <div className='p-4 md:px-20 lg:px-40 flex flex-col items-center h-[100vh] md:h-[] justify-around text-red-500 md:flex-row '>
      {/* Img container */}
      {pastas[params.id-1].img &&
       (<div className='relative w-full h-1/2  m-x-5 hover:rotate-180 transition-all duration-1000'>
        <Image src={pastas[params.id-1].img} alt='product-img' fill className='object-contain'/>
      </div>)}
      

      {/** text container */}
      <div>
        <h1 className='font-bold text-4xl text-center mb-5'>{pastas[params.id-1].title}</h1>
        <p className='text-center mb-5'>{pastas[params.id-1].desc}</p>
      </div>
    </div>
    
    </>)   }
    
      
    </>
  )
}

export default SingleProductPage