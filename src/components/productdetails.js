import { useState } from "react";
import { veg_logo} from "../utils/constant";

import { useDispatch } from "react-redux";
import { increaseCart,decreaseCart,increaseCartByCart,decreaseCartByCart} from "../utils/cartslice";


const Productdetails = (props) =>{

    
    const {details} = props;

    const {price}=details?.details?.card?.info;
    const [count,setcount]=useState(details?.quantity);
    const {name}=details?.details?.card?.info

   

    const dispatch = useDispatch();

    const countincrease=()=>{
        
  
       dispatch(increaseCartByCart(props))
      
        setcount(count+1);
        console.log(props)
    }

    const countdecrease=()=>{
        
   
        dispatch(decreaseCartByCart(props))
       
        setcount(count-1);
    }


    
    return(
        <div>
            <div className="px-[30px]">
                <div className="py-[10px] flex justify-between">

                    <div className="flex">
                        <img className="w-7 h-7 object-cover" src={veg_logo} alt="veg_icon" />
                        <div className="ml-[5px] mr-[14px] ">{name}</div>
                        
                    </div>


                    <div className="flex">
                        <div className="border-2 border-slate-300 h-[32px] w-[70px] flex justify-around">
                            <div><button onClick={() => {
                           
                            count!==1 && countdecrease()
                            }} >-</button></div>

                            
                            <div>{count}</div>

                            

                            <div><button onClick={() =>{
                                // (count>0)&& (
                                //     dispatch(increaseCart(props))
                                //     setcount(count+1)
                                // ) 
                                
                                count>0 && countincrease()
                               


                                
                            }} >+</button></div>
                        </div>
                        <div className="ml-5"><span>₹{(price)/100*count}</span></div> 


                    </div>


                </div>
            </div>

                            

        </div>
        
    );
};

export default Productdetails;