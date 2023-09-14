"use client"
import {  pastas } from '@/app/components/data'
import Image from 'next/image'
import React ,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '@/app/redux_toolkit/slices/cart/cartSlice'




function PastaPage({params}) {
  const [quantity , setQuantity]=useState(1)
  const [selected , setSelected]=useState(0)
  const cart = useSelector(state=>state.cart)
  const dispatch = useDispatch()
  const item = pastas[params.id-1];
const totPrice = ((pastas[params.id-1].price + pastas[params.id-1]?.options[selected].additionalPrice )* quantity ).toFixed(2);

  return (
       <>
      <div className='p-4 md:px-20 lg:px-40 flex flex-col items-center h-[100vh] md:h-[] justify-around text-red-500 md:flex-row '>
      {/* Img container */}
      {pastas[params.id-1].img &&
       (<div className='relative w-full h-1/2  m-x-5 hover:rotate-90 transition-all duration-1000'>
        <Image src={pastas[params.id-1].img} alt='product-img' fill className='object-contain'/>
      </div>)}
      

      {/** text container */}
      <div>
        <h1 className='font-bold text-4xl text-center mb-5'>{pastas[params.id-1].title}</h1>
        <p className='text-center mb-5'>{pastas[params.id-1].desc}</p>
{/*handle price section */}

<h2 className='font-bold text-xl text-center mb-5'>{totPrice }</h2>
      {/**Options container */}
      <div className='mb-5 flex items-center justify-center'>
        {pastas[params.id-1].options?.map((option , index)=>{
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
      <div className='flex border-2 border-slate-400 rounded-md items-center m-5 '>
        <div className='flex flex-1 items-center justify-between'>
          <span className='font-bold'>Quantity</span>

          <div>
            <button  onClick={()=>setQuantity((prev)=> prev>1? prev-1:1)} className='text-lg font-bold hover:text-2xl'> {"<"} </button>
            <span className='text-lg hover:text-2xl font-bold'>{quantity}</span>
            <button onClick={()=>setQuantity((prev)=>prev+1)} className='text-lg font-bold hover:text-2xl'> {">"} </button>
          </div>
        </div>
        {/**Add to cart button */}
        <button onClick={()=>dispatch(addToCart({item , quantity , totPrice} ))} className='flex-2 bg-red-500 p-2 text-md text-white w-1/5 hover:bg-red-600 hover:text-lg transition-all duration-700'>Add to cart</button>
      </div>       
      </div>
    </div>
    
    </>
  )
}

export default PastaPage