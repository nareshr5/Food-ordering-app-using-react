import {createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({

    name:"cart slice",
    initialState:{
        cartList:[],
    },
    reducers:{
        addCartList:(state,action)=>{
            //state.cartList=action.payload;

            // check if the product is already there , if not add it , or else 

            const productPresent = state.cartList.find((item)=> item?.details?.card?.info?.id === action.payload?.details?.card?.info?.id);

            if(productPresent){
                productPresent.quantity++;
            }
            else{
                state.cartList.push({...action.payload,quantity:1})
            }
        },
        removeCartList:(state,action)=>{
            state.cartList=null;
        },
        increaseCart:(state,action)=>{
            const productPresent= state.cartList.find((item)=> item?.details?.card?.info?.id === action.payload?.details?.card?.info?.id);
            if(productPresent){
                productPresent.quantity++;
            }
        },
        decreaseCart:(state,action)=>{
            const productPresent=state.cartList.find((item)=> item?.details?.
            card?.info?.id === action.payload?.details?.card?.info?.id);

            if(productPresent){
                productPresent.quantity--;
            }
        }
    },
});

export const {addCartList,removeCartList,increaseCart,decreaseCart}=cartSlice.actions;
export default cartSlice.reducer;