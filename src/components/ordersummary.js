import veglogo from ".././images/veg_logo.png";
import { useSelector } from "react-redux";
import Paiditems from "../components/paiditems";

import img1 from "../images/foodimgs/img1.png"
import Foodimages from "./foodimages";

import order_approve from "../images/order_approve.png";

const OrderSummary = () =>{

    const {cartList} = useSelector((store)=> store.cart);

  

    let price=0;


    {cartList.map((item)=>(
        price=price+((item?.details?.card?.info?.price/100)*(item?.quantity))
    ))}

    const platform_fee=6;
    const packing_fee=price*.12;
    const delivery_fee = (price*0.08);
    const total=price+delivery_fee+platform_fee;
    const taxes = total*0.07;
    const toPay =packing_fee+total+taxes;

    return(
        <div className="mt-4 mx-2 border-8 border-orange-600">
      
            <div className="flex  bg-orange-600">
                <h1 className="text-3xl font-bold text-white p-2  ">Order Summary</h1>
                <h1 className="text-4xl mt-2">✔</h1>
            </div>
              
              
            
            

           
            <div className="px-2 bg-gray-100 w-auto h-70 my-4 py-4 mx-2 ">

                <div className="text-blue-600 font-semibold ">Payment successful</div>
                <div className="text-5xl font-bold flex items-center">
                    <span>Thanks for Ordering!</span>
                    <span className="mt-4 flex mx-2" >
                        <Foodimages/>
                        
                        
                    </span>
                </div>

                <div className="flex items-center mt-5 ">
                    <h2 className="text-xl font-bold mx-2">Tracking Number: </h2>
                    <p className="text-semibold mt-1 mx-1 text-blue-600"> - #48289272989804</p>
                </div>
                

                {/* <div className="bg-orange-500 w-[80%] h-70 py-4 my-4 mx-auto rounded-full"> */}

                    

                    <div className="bg-slate-200 w-[60%] mx-auto p-4 rounded-3xl my-8">
                        <p className="font-semibold text-xl px-6">Bill Details</p>

                        <div className="w-3/4 mx-auto my-2 ">

                            <ul className="border-b-2 border-gray-400 pb-6 ">

                                    <div className="flex justify-between   font-bold pb-1  -mr-1  ">
                                        <li className="ml-10 bg-gray-400 p-1 px-2 rounded-lg">Items</li>
                                        {/* s */}
                                        <li className="mr-8 bg-gray-400 p-1 px-2 rounded-lg">Price</li>
                                    </div>


                                {cartList.map((item)=>(
                                   <Paiditems data={item}/> 
                                ))}

          

                            </ul>

                            <div className="text-slate-600 "> 
                                <ul className="my-4">
                                    <li className="flex justify-between">
                                        <li>Item Total</li>
                                        <li>₹ {price}</li>
                                    </li>
                                    
                                    <li className="flex justify-between">
                                        <li>Order packaging charges </li>
                                        <li>₹ {packing_fee.toPrecision(2)}</li>
                                    </li>
                                    
                                    <li className="flex justify-between">
                                        <li>platform fee</li>
                                        <li>₹ {platform_fee}</li>
                                    </li>
                                    
                                    {/* <li className="flex justify-between">
                                        <li>Discount applied </li>
                                        <li>-₹194.99</li>
                                    </li> */}
                                    
                                    <li className="flex justify-between">
                                        <li>Delivery Fee</li>
                                        <li className="text-green-600 font-semibold">{delivery_fee.toPrecision(3)}</li>
                                    </li>
                                    
                                    <li className="flex justify-between">
                                        <li>GST and Restaurant Charges</li>
                                        <li>₹ {taxes.toPrecision(3)}</li>
                                    </li>


                                    <li className="flex justify-between mt-4 text-black font-semibold">
                                        <li>Paid via Bank</li>
                                        <li>₹ {toPay.toPrecision(3)}</li>
                                    </li>
                                    
                                   
                                    
                                </ul>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                {/* </div> */}

                <div className="flex">

                
                    <span className="mt-2 flex mx-1" >
                            <Foodimages/> 
                        </span>
                    <span className="text-5xl flex justify-end mx-7 font-semibold">Food is on the way...</span>
                </div>
                
            </div>
            
        </div>
    );
}

export default OrderSummary;