import BillDetails from "./billdetails";
import {useState} from "react";
import {useNavigate} from "react-router-dom" 
import { veg_logo , rough_res_cartimg


} from "../utils/constant";


const Cart = ()=>{

    // if the user is not signed in redirect the user to the signin page and then direct him to the cart page
 

    const navigate = useNavigate();
 
    const [count,setCount] = useState(1);
    const [exampleItemPrice, setexampleItemPrice] =useState(100);
   
 

    
    
    return(

    <div className="w-7/12 h-[1000px] mx-auto mt-3 bg-slate-200">
        <h1 className="bg-orange-500 font-bold text-white py-2 text-2xl "> Cart</h1>
        
        <div className="bg-white w-auto h-auto mx-4 my-2 border-white border-4 rounded-2xl px-6 ">
            

            <div className="py-5 px-[30px] flex">
                <span>
                     <img className="w-15 h-15" src={rough_res_cartimg} alt="res_image" />
                </span>
                <span className="ml-3">
                    <div className="font-bold text-2xl">Restaurant Name</div>
                    <div className="text-slate-500 text-xl">Locality Name</div>
                </span>
            </div>

            {/* <div>fried rice</div> */}

            <div>
                <div className="px-[30px]">
                    <div className="py-[10px] flex justify-between">

                        <div className="flex">
                            <img className="w-7 h-7" src={veg_logo} alt="veg_icon" />
                            <div className="ml-[5px] mr-[14px] ">Chicken Salad Sandwich</div>
                        </div>


                        <div className="flex">
                            <div className="border-2 border-slate-300 h-[32px] w-[70px] flex justify-around">
                                <div><button onClick={() => {
                                   count>1 && setCount(count-1)
                                    
                                }} >-</button></div>

                                <div>{count}</div>

                                <div><button onClick={() =>{
                                    setCount(count+1);
                                    
                                }} >+</button></div>
                            </div>
                            <div className="ml-5"><span>₹{exampleItemPrice}</span></div>
                        </div>

                    </div>
                </div>
            </div>

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

            

            <div className="my-15"><BillDetails/></div>

            <div>
                <div className="mb-[32px] my-10">
                    <div className="mr-[25px] font-bold text-xl">
                       Chooose payment method
                    </div>
                  
                </div>
                <button onClick={() => navigate("/payment")} className="text-white bg-green-700 w-full h-[50px] font-bold rounded-xl mb-20">PROCEED TO PAY</button>
            </div>
            
        </div>

   </div>
   );
}

export default Cart;