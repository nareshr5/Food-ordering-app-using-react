import { payment_icons } from "../utils/constant";

import { useSelector } from "react-redux";
import appStore from "../utils/store";

import { useNavigate } from "react-router-dom";




const Payment = () =>{

     const {paymentValue} = useSelector((store)=> store.payment);
    // console.log(toPay);

    const {resList} = useSelector((store) => store.cart);

    console.log(resList);

    const navigate=useNavigate();

    const {deliverytime} = useSelector((store)=> store.cart)

    return(
        <div className="w-8/12 h-auto  mx-auto my-5  bg-slate-100 ">
            
            <div className="pb-[40px]">
                <div className="font-bold  text-2xl  my-5 bg-orange-600 text-white mt-5 flex items-center"><span className="px-6 py-4 ">Payment options</span> </div>

                 <div className="border-2 border-gray-600 p-4 rounded-3xl mx-5">
                            <div className="flex">
                                <div className="pr-2 text-gray-800 font-bold">{resList}</div>
                                <p className="mr-2 text-gray-500">| Delivery in: {deliverytime}  mins</p>
                            </div>


                            {/* <div className="mt-2 flex">
                                <div className="pr-2 pb-1 text-gray-800 font-bold">Work</div>
                                <div className="text-gray-500">| 11, House, 1st Main Rd, Peenya Iii Phase, Peenya, Bengaluru, Karnataka 560058, India</div>
                            </div> */}
                 </div>


                 <div className="my-2 mx-auto w-3/4 mt-7 font-semibold">Review your order to avoid cancellations</div>
                 <div className="w-3/4 h-20 bg-white mx-auto  py-4 px-5 rounded-2xl shadow-lg">
                                
                                    <div className="flex mx-3">
                                    <span className="text-red-600 mr-2 font-semibold">NOTE: </span>
                                    <span> Orders cannot be cancelled and are non-refundable once packed for delivery</span>
                                    </div>

                                    <span className="text-orange-600 font-semibold text-sm mt-3 mx-4">Read Cancellation Policy</span>
                </div>


                 <div className=" p-4 rounded-3xl mt-4 w-3/4 mx-auto">

                                
                            
                            <button onClick={()=> navigate("/summary") } className=" delay-100 duration-150 hover:scale-105 bg-green-500 text-white flex mx-auto w-[90%] p-2 rounded-2xl cursor-pointer ">

                                <p className="font-bold text-2xl ml-28 " >Amount to be paid: </p>

                                <p className=" text-2xl font-semibold mx-4 text-black font-serif">{paymentValue.toPrecision(3)}</p>
                            </button>
                            <p className="mt-2 font-semibold w-[30%] mx-auto rounded-lg border-2 border-black" onClick={()=> alert("it for reference purpose alone!")}>Select a payment option</p>
                 </div>


                <div className="mt-16 h-[19px] mb-5 mx-7 text-slate-500">
                    ---- *** the section below is just for representative purpose and doesnot hyperlink to actual working pages *** ---
                </div>

                <div className="mt-6 h-[19px] mb-5">
                            <h2 className="text-gray-600 px-5 mb-4 font-bold">Pay By an UPI App</h2>
                            
                </div>



                <div className="bg-white mx-5 rounded-2xl">

                            <div className="my-[10px] mx-4 h-[74px]">
                        <div className="py-[18px] px-4 h-[38px]">
                            <div className="h-[32px] w-full flex">


                                <div className=" h-[24px] w-[32px] border-[1px] border-slate-400 rounded-lg ">
                                    {/* <button className="text-orange-600 font-bold text-xl  w-[10px] h-[22px] px-[6px]  -py-[6px] ">+</button> */}
                                    <button className="text-orange-600 font-bold text-xl pl-1.5  h-[12px] -mt-1">+</button>
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
                                    {/* <button className="text-orange-600 font-bold text-xl  w-[10px] h-[22px] px-[6px]  -py-[6px] ">+</button> */}
                                    <button className="text-orange-600 font-bold text-xl pl-1.5  h-[12px] -mt-1">+</button>
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

                              
                                        <div className="px-4 py-[18px] h-[37px] flex cursor-pointer">

                                            
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

                                <div className="px-4 py-[18px] h-[37px] flex cursor-pointer">

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

                                <div className="px-4 py-[18px] h-[37px] flex cursor-pointer">

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

                                <div className="px-4 py-[18px] h-[37px] flex cursor-pointer">

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