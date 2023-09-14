"use client"
import {  burgers } from '@/app/components/data'
import Image from 'next/image'
import React , {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../redux_toolkit/slices/cart/cartSlice'



function BurgerPage({params}) {
  const [quantity , setQuantity]=useState(1)
  const [selected , setSelected]=useState(0)
  const cart = useSelector(state=>state.cart)
  const dispatch = useDispatch()
  const item = burgers[params.id-1] 
  const totPrice = ((burgers[params.id-1].price + burgers[params.id-1].options[selected].additionalPrice )* quantity ).toFixed(2)

  return (
       <>
      <div className='p-4 md:px-20 lg:px-40 flex flex-col items-center h-[100vh] md:h-[] justify-around text-red-500 md:flex-row '>
      {/* Img container */}
      {burgers[params.id-1].img &&
       (<div className='relative w-full h-1/2  m-x-5 hover:rotate-90 transition-all duration-1000'>
        <Image src={burgers[params.id-1].img} alt='product-img' fill className='object-contain'/>
      </div>)}
      

      {/** text container */}
      <div>
        <h1 className='font-bold text-4xl text-center mb-5'>{burgers[params.id-1].title}</h1>
        <p className='text-center mb-5'>{burgers[params.id-1].desc}</p>
        {/*handle price section */}

        <h2 className='font-bold text-xl text-center mb-5'>{`${totPrice}`}</h2>
      {/**Options container */}
      <div className='mb-5 flex items-center justify-center'>
        {burgers[params.id-1].options?.map((option , index)=>{
          return(
              <button className="mx-4 rounded-md text-white p-2 border-2 border-red-500  hover:text-lg transition-all duration-700" key={option.title}
              style={{backgroundColor:selected===index ? "rgb(248 113 113)" : "white",
                      color:selected===index?"white":"red",
                      
            }}
              
              onClick={()=>setSelected(index)}>{option.title}</button>
          )
        })}
      </div>

      {/** Quantity container */}
      <div className="flex justify-between items-center">
        {/* Quantity */}
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500 rounded-l-md rounded-r-sm">
          <span>Quantity</span>
          <div className="flex gap-5 items-center">
            <button 
              onClick={() => {
                if(quantity>1)
                setQuantity(quantity - 1);
              }}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => {
               
                setQuantity(quantity + 1);
              }}
            >
              {">"}
            </button>
          </div>
        </div>

        {/* Add */}

        <div className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500 text-center hover:bg-red-600 rounded-r-full transition-all duration-300">
          
          <button className="" onClick={()=>dispatch(addToCart({item,quantity,totPrice}))}>Add To Cart</button>
        </div>
      </div>

    
    
      </div>
    </div>
    
    </>
  )
}

export default BurgerPage