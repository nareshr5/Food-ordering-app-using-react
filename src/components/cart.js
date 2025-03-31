import BillDetails from "./billdetails";
import {useState} from "react";
import {NavLink} from "react-router-dom" 
import {veg_logo , rough_res_cartimg} from "../utils/constant";

import { useSelector } from "react-redux";
import Productdetails from "./productdetails";

import { CDN_URL_FOR_DISHES } from "../utils/constant";









const Cart = ()=>{

    // if the user is not signed in redirect the user to the signin page and then direct him to the cart page
 
    const [count,setCount] = useState(1);
    const [ItemPrice, setItemPrice] =useState();
    const itemtotal=0;

    const {cartList, resList} =useSelector((store)=> store.cart);

    const {locality} =useSelector((store)=> store.cart);

    const cartSizeIncreased = () =>{

    }

    // useEffect(() =>{
    //     <Cart/>
    // },[cartList])
    
  

  


    if(cartList.length===0) return null;


  
    
    return(

    <div className="w-7/12 h-auto mx-auto  mb-10 mt-3  bg-slate-500">
        <h1 className="bg-orange-500 font-bold text-white py-2 px-5 text-3xl  "> Cart</h1>
        
        <div className="bg-white w-auto  h-auto mx-4 my-5 border-white border-4 rounded-2xl px-6 ">
            

            <div className="py-1 px-[20px] flex mt-3 ">
                <div>
                     <img className="w-[60%] h-[70%] rounded-lg  " src={ CDN_URL_FOR_DISHES+cartList[0]?.details?.card?.info?.imageId} alt="res_image" />
                </div>
                <div className="ml-3">
                    <div className="font-bold text-2xl">{resList}</div>
                    <div className="text-slate-500 text-xl">{locality}</div>
                </div>
            </div>

            

            {cartList.map((item) =>(

                   <Productdetails  data={item}/>       

            ))}

            



            <div className="px-[25px] my-10">
              <div className="border-gray-400 border-2 mt-5 px-[15px] py-1 flex rounded-lg">

                  <div className="flex">
                     <div className="mt-1 mr-4"><input type="checkbox" /></div>

                     <div>
                        <div>Opt in for No-contact Delivery</div>
                        <div className="text-justify">Unwell, or avoiding contact? Please select no-contact delivery. Partner will safely place the order outside your door (not for COD)</div>

                     </div>
                  </div>

                
                
                
                </div>

            </div>

            

            <div className="my-15">
                
                
                   <BillDetails data={cartList}/>

        
                
                
            </div>



            <div>
                <div className="mb-[22px] my-10">
                    <div className="mr-[25px] font-bold text-xl">
                       Chooose payment method
                    </div>
                  
                </div>

                {/* <button onClick={() => 
                   
                    navigate("/payment")} className="text-white bg-green-700 w-full h-[50px] font-bold rounded-xl mb-20" </button>*/}

                <NavLink to="/payment">
                    <button className="text-white bg-green-700 w-full h-[50px] font-bold rounded-xl mb-10">PROCEED TO PAY</button>
                </NavLink>

            </div>
            
        </div>

   </div>
   );
}

export default Cart;