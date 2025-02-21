import RestaurantAccordion from "./resaccordion";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

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
                                <button className="w-[768px] h-[20.3px] mb-6 pr-4 flex justify-between">
                                
                                  <h3 className="font-extrabold w-[154.3px] h-[20px] text-left" >{data[0]?.card?.info?.category}</h3>
                                 
                                  <div className="w-4 h-5" onClick={() => setIsOpen(!isopen)}>🔺</div>
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