import RestaurantAccordion from "./resaccordion";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import dropdown from "../images/arrow_down.png"

const RestaurantAccordionList = (props) =>{
   

    const {data} =props;
   
    const [accordionData,useAccordionData]=useState(data);
    //console.log(accordionData);

    const [isopen,setIsOpen] = useState(true);

    const {cartList}= useSelector((store)=> store.cart);

    
    
   if(!data) return null;
   
    return(

        <div>

            {/* need to delete this */}
            {/* <div className="my-1">
                <button className= " w-[118px] h-[38px] text-orange-600 font-bold bg-white rounded-lg border-2 border-slate-300 hover:bg-orange-500 hover:text-white">Go to cart</button>
            </div> */}
            <div>

                            {/* accordion group heading */}

                            <div>
                                <button className="w-[768px] h-[30.3px] mb-6 pr-4 flex justify-between bg-amber-500 rounded-lg  delay-100 duration-300 hover:scale-105" onClick={() => setIsOpen(!isopen)}>
                                
                                  <h3 className="font-extrabold w-[154.3px] h-[20px] text-left px-2 py-1 text-lime-50 text-" >{data[0]?.card?.info?.category}</h3>
                                 
                                  {(isopen)? <div className="w-4 h-5" >🔺</div> : <div className="w-4 h-5" > 🔻</div>}
                                  
                                  
                                </button>
                            </div>

                {data.map((item, index) =>(
                    
                          isopen &&  <div key={index}>
                            <RestaurantAccordion details={item} />
                            </div>
                    
                    
                ))}
            </div>
           

        </div>

        
        // <div>

           
        //       <RestaurantAccordion details={data?.card?.info} />
           
        // </div>
 
        
    );

}

export default RestaurantAccordionList;