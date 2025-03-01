import {createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({

    name:"cart slice",
    initialState:{
        cartList:[],
        resname:"",
        locality:"",
        deliverytime:"",
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
            
            // this logic is so important because it removes the items from the cart list , if its
            // quantity goes to zero
             state.cartList = state.cartList.filter((item)=>{
                return item?.details?.card?.info?.id !== action.payload?.details?.card?.info?.id;
            } );

          

            
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
        },
        addResname:(state,action)=>{
            state.resList=action.payload;
            
        },
        addResLocality:(state,action)=>{
            state.locality=action.payload;
        },
        adddeliverytime:(state,action)=>{
            state.deliverytime=action.payload;
        },
    },
});

export const {addCartList,removeCartList,increaseCart,decreaseCart,addResname,addResLocality,adddeliverytime}=cartSlice.actions;
export default cartSlice.reducer;