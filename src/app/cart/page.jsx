"use client"
import Image from "next/image";
import React from "react";
import { useSelector , useDispatch} from 'react-redux'
import { deleteFromCart , clearCart } from "../redux_toolkit/slices/cart/cartSlice";
const CartPage = () => {
   const cart = localStorage.getItem("cartItems")
  const dispatch = useDispatch()
  let myPrice = 0;
  let myQuantity = 0;
  const price =()=>{
      cart.map((product)=>{
        myPrice+=Number(product.totPrice)
      })
      return Number (myPrice);
  } ;

  const totalQuantity =()=>{
    cart.map((product)=>{
      myQuantity+=Number(product.quantity)
    })
    return Number (myQuantity);
} ;
  {/** call function every rendering */}


  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col  text-red-500 lg:flex-row">
      {/* PRODUCTS CONTAINER */}
    
      <div className="h-1/2 overflow-x-hidden p-4 flex flex-col  overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        <table className="w-full ">
          <thead className="border-b font-medium dark:border-neutral-300 ">
            <tr>
              <th scope="col" className=" text-center py-4 hidden md:inline-block">Img</th>
              <th scope="col" className=" text-center py-4">Title</th>
              <th scope="col" className="px-3 text-center py-4">Price</th>
              <th scope="col" className="px-3 text-center py-4">Quantity</th>
              <th scope="col" className="px-3 text-center py-4">Delete</th>
            </tr>
          </thead>
          <tbody>
          { cart.length!==0 && (cart.map((cartItems , index)=>{
        return(
            <tr key={index}
              className=" border-b transition duration-300 ease-in-out hover:bg-red-500 dark:border-neutral-500 dark:hover:bg-red-100">
              <td className="text-center whitespace-nowrap  py-4 font-medium hidden md:inline-block"><Image src={cart.item.img} alt="" width={120} height={120} className="hover:rotate-45 transition-all duration-1000  " /></td>
              <td className=" text-center py-4 font-bold">{cartItems.item.title}</td>
              <td className="text-center font-bold whitespace-nowrap mx-5  py-4">{cartItems.totPrice}</td>
              <td className="text-center  font-bold whitespace-nowrap mx-5  py-4">{cartItems.quantity}</td>
              <td className="text-center  font-bold whitespace-nowrap mx-5 py-4"><span onClick={()=>dispatch(deleteFromCart(cartItems.item))} className="cursor-pointer hover:text-red-700 hover:text-lg">X</span></td>
            </tr>
                )
              }))}
          
          </tbody>
        </table>
    



  {cart.length!== 0 && ( <button onClick={()=>dispatch(clearCart()) } className=" bg-red-900 rounded-md font-bold mt-5 p-3 text-white text-md hover:text-lg ">Clear all </button> )}

</div>
      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span className="">Subtotal {totalQuantity()}</span>
          <span className="">{( Number(price()).toFixed(2)  )}$</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
           {cart.length? <span className=""> 5$</span> : <span> 0</span>}
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL(INCL. VAT)</span>
          {cart.length? <span className="font-bold"> {Number( price() / 2  +5 ).toFixed(2)   }  </span> : <span className="font-bold"> 0</span>}
        </div>
        <button className="bg-red-500 text-white p-3 text-sm rounded-md w-1/2 self-end hover:bg-red-600 hover:font-bold hover:text-md transition-all duration-700">
          CHECKOUT
        </button>
      </div>

    </div>
  );
};

export default CartPage;
