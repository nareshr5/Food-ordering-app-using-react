import { useState } from "react";
import { resMenuImage } from "../utils/constant";

const RestaurantAccordion = (props) =>{
    const {data} = props;
    const [isopen,setIsOpen] = useState(true);
   // console.log(data);
   // dynamic datas to get  --> accordion title , rating , descriptions ,
   //console.log(data);
   // working on to get hte dynamic data
    return(
        <div>


             <button className="w-[768px] h-[20.3px] mb-6 pr-4 flex justify-between">
                <h3 className="font-extrabold w-[154.3px] h-[20px]" >Recommended(14)</h3>
                
                <div className="w-4 h-5" onClick={() => setIsOpen(!isopen)}>🔺</div>
                </button>

            <div>


             {isopen && <div className="w-[768px] h-[3061]">
                    <div className="w-[768px] h-[203px]">
                        <div className="w-[768px] h-[174px] my-1">
                            <div className="w-[768px] h-[174px] flex">
                                <div className="w-[552px] h-[174px] ">
                                    <div className="w-[552px] h-[16px] mb-1">🔺</div>
                                    <div className="w-[552px] h-5 font-bold">Combo for 1 Non-Veg</div>
                                    <div className="w-[552px] h-[19px] mt-1">
                                        <div className="w-[35px] h-[19px] mr-1">
                                            <span className="w-[35px] h-[19px] mr-1 font-semibold"> 
                                                <div className="w-[35px] h-[19px]">
                                                Rs379
                                                </div>
                                            </span>
                                        
                                        </div>
                                    </div>

                                    <div className="w-[552px] h-4 mt-3 flex text-sm">
                                        <div className="w-[14px] h-[14px] mr-1">⭐</div>
                                        <div className="w-[16.5px] h-[16px] mx-1">3.9</div>
                                        <div className="w-[18.5px] h-[16px] mx-1">(13)</div>

                                    </div>

                                    <div className="w-[552px] h-[50px]">
                                        <div className="w-[552px] h-[38px] mt-3 text-gray-500 font-semibold">
                                        Serves 1 | Combo for one (Rice/Noodle Bowl with choice of Non-Veg Gravy, Non- Veg Momos & Drinks)
                                        </div>
                                    
                                    </div>

                                </div>

                                <div className="w-[156px] h-[174px] ml-[60px] ">
                                    <button className="w-[165px] h-[144px]">
                                    <img className="w-[156px] h-[144px] rounded-lg" alt="food_image" src={resMenuImage}/>
                                    </button>

                                    <div className="w-[156px] h-[58px]">
                                        <div className="w-[156px] h-[58px]">
                                        <div className="w-[156px] h-[58px]">
                                            <div className="w-[118px] h-[38px] border-black -my-5 mx-auto">
                                                <button className= " w-[118px] h-[38px] text-green-800 font-bold bg-white rounded-lg border-2 border-slate-300">ADD</button>
                                            </div>
                                        </div>
                                        </div>
                                        
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>


                    



                </div>
              }

              <div className="w-[768px] border-b-2 border-slate-300 mt-1 mb-5"> </div>



            </div>
        </div>


        
    )
}

export default RestaurantAccordion;