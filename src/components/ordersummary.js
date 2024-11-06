import veglogo from ".././images/veg_logo.png";

const OrderSummary = () =>{
    return(
        <div className="mt-4 mx-2 border-8 border-orange-600">
            <h1 className="text-3xl font-bold bg-orange-600 text-white p-2  ">Order Summary</h1>
           
            <div className="px-2 bg-gray-300 w-auto h-70 my-4 py-4 mx-2 ">

                <div className="flex items-center ">
                    <h2 className="text-xl font-bold mx-2">Order details: </h2>
                    <p className="text-semibold mt-1 mx-1">OrderNumber - #48289272989804</p>
                </div>
                

                <div className="bg-orange-500 w-[80%] h-70 py-4 my-4 mx-auto rounded-full">

                    

                    <div className="bg-slate-200 w-3/4 mx-auto p-4 rounded-3xl my-8">
                        <p className="font-semibold text-xl px-6">Bill Details</p>

                        <div className="w-3/4 mx-auto my-2 ">

                            <ul className="border-b-2 border-gray-400 pb-6 ">

                                    <div className="flex justify-between font-bold pb-1 mx-3 -mr-1">
                                        <li>Items</li>
                                        {/* s */}
                                        <li>Price</li>
                                    </div>

                                <li className="flex justify-between ">

                                    
                                    <div className="flex items-center">
                                        <img  className="w-10 h-10" src={veglogo} alt="veg_logo" />
                                        <li className="pb-1">can coke</li>
                                        
                                    </div>
                                    
                                    
                                    <li>₹70</li>
                                </li>

                                <li className="flex justify-between">
                                    <div className="flex items-center">
                                        <img  className="w-10 h-10" src={veglogo} alt="veg_logo" />
                                        <li className="pb-1">peri peri paneer burger</li>
                                    </div>
                                    
                                    <li>₹199</li>
                                </li>

                                <li className="flex justify-between">
                                    <div className="flex items-center">
                                        <img  className="w-10 h-10" src={veglogo} alt="veg_logo" />
                                        <li className="pb-1">French Fries Large</li>
                                    </div>
                                    {/* <p>1</p> */}
                                    <li>₹119</li>
                                </li>

                            </ul>

                            <div > 
                                <ul className="text-slate-600 my-4 ">
                                    <li className="flex justify-between">
                                        <li>Item Total</li>
                                        <li>₹388</li>
                                    </li>
                                    
                                    <li className="flex justify-between">
                                        <li>Order packaging charges </li>
                                        <li>₹33</li>
                                    </li>
                                    
                                    <li className="flex justify-between">
                                        <li>platform fee</li>
                                        <li>₹10</li>
                                    </li>
                                    
                                    <li className="flex justify-between">
                                        <li>Discount applied </li>
                                        <li>-₹194.99</li>
                                    </li>
                                    
                                    <li className="flex justify-between">
                                        <li>Delivery Fee</li>
                                        <li className="text-green-600 font-semibold">FREE</li>
                                    </li>
                                    
                                    <li className="flex justify-between">
                                        <li>Taxes</li>
                                        <li>₹15.60</li>
                                    </li>


                                    <li className="flex justify-between mt-4 text-black font-semibold">
                                        <li>Paid via Bank</li>
                                        <li>₹252</li>
                                    </li>
                                    
                                   
                                    
                                </ul>
                            </div>

                        </div>
                        
                    </div>
                </div>

                
            </div>
            
        </div>
    );
}

export default OrderSummary;