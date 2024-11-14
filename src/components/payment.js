import { payment_icons } from "../utils/constant";


const Payment = () =>{
    return(
        <div className="w-8/12 h-auto  mx-auto my-5  bg-slate-100">
            <div className="mx-5 pb-[40px]">
                <div className="font-bold my-5 text-2xl pt-5">Payment options </div>

                <div className="py-[18px] border-slate-500 border-2 px-2 rounded-xl">
                    
                        <div>
                            <div className="flex">
                                <div className="pr-2 text-gray-800 font-bold">Starbucks</div>
                                <p className="mr-2 text-gray-500">| Delivery in: 41 mins</p>
                            </div>


                            <div className="mt-2 flex">
                                <div className="pr-2 pb-1 text-gray-800 font-bold">Work</div>
                                <div className="text-gray-500">| 11, House, 1st Main Rd, Peenya Iii Phase, Peenya, Bengaluru, Karnataka 560058, India</div>
                            </div>
                        </div>

                </div>


                <div className="mt-6 h-[19px] mb-5">
                            <h2 className="text-gray-600 px-5 mb-4 font-bold">Pay By an UPI App</h2>
                            
                </div>



                <div className="bg-white mx-5 rounded-2xl">

                            <div className="my-[10px] mx-4 h-[74px]">
                        <div className="py-[18px] px-4 h-[38px]">
                            <div className="h-[32px] w-full flex">


                                <div className=" h-[24px] w-[32px] border-[1px] border-slate-400 rounded-lg ">
                                    <button className="text-orange-600 font-bold text-xl  w-[10px] h-[22px] px-[6px] -py-[4px] ">+</button>
                                </div>

                                <div className="px-4">

                                        <div className="text-orange-500 font-bold w-full h-5">Add New UPI ID</div>
                                        <div className="mt-1 text-gray-500">You need to have a Registered UPI</div>
                                </div>
                                
                            </div>
                        </div>
                    </div>


                </div>









                <div className="mt-6 h-[19px] mb-5">
                            <h2 className="text-gray-600 px-5 mb-4 font-bold">Credit & Debit Cards</h2>
                            
                </div>



                <div className="bg-white mx-5 rounded-2xl">

                            <div className="my-[10px] mx-4 h-[74px]">
                        <div className="py-[18px] px-4 h-[38px]">
                            <div className="h-[32px] w-full flex">


                                <div className=" h-[24px] w-[32px] border-[1px] border-slate-400 rounded-lg ">
                                    <button className="text-orange-600 font-bold text-xl  w-[10px] h-[22px] px-[6px] ">+</button>
                                </div>

                                <div className="px-4">

                                        <div className="text-orange-500 font-bold w-full h-5">Add New card</div>
                                        <div className="mt-1 text-gray-500">Save and pay via cards.</div>
                                </div>
                                
                            </div>
                        </div>
                    </div>


                </div>




                <div className="mt-6">
                    <div className="mb-4 px-5 h-[19px] w-full font-bold">More Payment Options</div>

                    <div className="mx-4 my-[10px] h-[295px] bg-white rounded-3xl">



                        <div className="h-[73px] border-b-[1px] border-gray-500 border-dotted ">

                                <div className="px-4 py-[18px] h-[37px] flex">

                                        <div className="h-[36px] w-[36px] p-[7px] border-[1px] border-gray-300 rounded-lg" >
                                           <img className="h-5 w-5" src={payment_icons+"Wallet"} alt="wallets"/>
                                        </div>

                                        <div className="px-4 h-[37px]">
                                             <div className="font-bold">Wallets</div>
                                             <div className="text-gray-600 text-sm font-semibold">PhonePe, Amazon Pay & more</div>
                                        </div>

                                </div>

                        </div>


                        <div className="h-[73px] border-b-[1px] border-gray-500 border-dotted ">

                                <div className="px-4 py-[18px] h-[37px] flex">

                                        <div className="h-[36px] w-[36px] p-[7px] border-[1px] border-gray-300 rounded-lg" >
                                                <img className="h-5 w-5" src={payment_icons+"food_card"} alt="pluxee"/>

                                        </div>

                                        <div className="px-4 h-[37px]">
                                             <div className="font-bold">Pluxee</div>
                                             <div className="text-gray-600 text-sm font-semibold">Pluxee card valid only on Food & instamart</div>
                                        </div>

                                </div>

                        </div>


                        <div className="h-[73px] border-b-[1px] border-gray-500 border-dotted ">

                                <div className="px-4 py-[18px] h-[37px] flex">

                                        <div className="h-[36px] w-[36px] p-[7px] border-[1px] border-gray-300 rounded-lg" >

                                           <img className="h-5 w-5" src={payment_icons+"Net_banking"} alt="net_banking"/>
                                        
                                        </div>

                                        <div className="px-4 h-[37px]">
                                             <div className="font-bold">Net banking</div>
                                             <div className="text-gray-600 text-sm font-semibold">Select from a list of banks</div>
                                        </div>

                                </div>

                        </div>




                        <div className="h-[73px] ">

                                <div className="px-4 py-[18px] h-[37px] flex">

                                        <div className="h-[36px] w-[36px] p-[7px] border-[1px] border-gray-300 rounded-lg" >

                                            <img className="h-5 w-5" src={payment_icons+"Cash"} alt="pay_ondelivery"/>


                                        </div>

                                        <div className="px-4 h-[37px]">
                                             <div className="font-bold">Pay on Delivery</div>
                                             <div className="text-gray-600 text-sm font-semibold">Pay in cash or pay online.</div>
                                        </div>

                                </div>

                        </div>
                        


                        
                    </div>

                </div>

                


                
            </div>
            
        </div>
    )
};

export default Payment;