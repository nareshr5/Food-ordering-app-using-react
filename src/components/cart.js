import BillDetails from "./billdetails";

import {NavLink} from "react-router-dom" 

import { useSelector } from "react-redux";
import Productdetails from "./productdetails";

import { CDN_URL_FOR_DISHES } from "../utils/constant";
import emptycart from "../images/emptycart.png"









const Cart = ()=>{

    // if the user is not signed in redirect the user to the signin page and then direct him to the cart page
 


    const {cartList, resList} =useSelector((store)=> store.cart);

    const {locality} =useSelector((store)=> store.cart);

    //if(cartList.length===0) return <h1>hey there</h1>;


  

    
    return(


        (cartList.length===0)?(<div className="w-10/12 h-auto mx-auto p-4  mb-10 mt-3  bg-yellow-400">
                    
                    <div className="w-3/12 h-auto my-10 p-4 bg-white mx-auto rounded-2xl">
                      <img  className="mx-auto p-4" src={emptycart} alt="emptycartimage"/>
                      <p className="text-center p-2">!! Your bowl is empty !!</p>
                      <p className="text-slate-500 text-center p-2">Looks like you haven't added anyting to eat yet</p>
                    </div>

                    <div className="ml-[46%]">
                        <button className="w-auto p-2 h-auto bg-white rounded-2xl ">Fill by bowl</button>
                    </div>
                    
            
            </div>)
            
            
            
            
            
            
            
            :(<div className="w-7/12 h-auto mx-auto  mb-10 mt-3  bg-slate-500">
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
                        
                                    <Productdetails  details={item}/>       

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

             </div>)
        

    
   );
}

export default Cart;