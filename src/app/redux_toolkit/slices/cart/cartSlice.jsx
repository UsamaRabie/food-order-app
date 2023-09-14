import { createSlice } from '@reduxjs/toolkit';

export const cartSlice= createSlice({
  name:"cart",
  initialState:[],
       
  reducers:{
       addToCart:(state, action) => {
        const findProduct = state.find((product)=>product.item.title === action.payload.item.title)
        if(!findProduct){
          return [...state , action.payload ]
        }
        localStorage.setItem('cartItems', JSON.stringify(state));
        
      },
       deleteFromCart: (state, action) => {
        return  state.filter( (product)=>product.item.title !== action.payload.title )
       },
       clearCart:  (state, action) => {
        return state = [];
     },
  }
})

  export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
