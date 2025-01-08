import RestaurantAccordionList from "../components/resaccordionlist";
import { delivery_icon } from "../utils/constant";

import { restaurant_menu } from "../utils/constant";
import { useState, useEffect } from "react";

import rating from "../images/rating.png";

const RestaurantMenu = () =>{

    const [resmenu,setresmenu] = useState();

    useEffect(() =>{
        getData();
    },[]);

    

    const getData = async() =>{
        const data = await fetch(restaurant_menu);
        const jsonValue = await data.json();
        const resdata = jsonValue?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
           
        setresmenu(resdata);
        //console.log(jsonValue?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        //console.log(resdata);
       
    }
    

    if(!resmenu) return null;

    

    return(

        <div className="w-[800px] mx-auto  bg-slate-50">
            <div className="w-[784px] h-[60.1px] ml-[16px] mb-[8px]">
                    <h1 className="h-[28px] my-[16px] font-extrabold text-2xl">Chinese Wok</h1>
            </div>

            <div className="w-[800px] h-[206.1px] px-4 pb-4 rounded-3xl bg-gradient-to-t from-gray-300">
                <div className="w-[766px] h-[188.18px] bg-white rounded-2xl border-[1.5px] border-slate-300">

                    <div className="w-[766px] mb-4 bg-gray=300"> </div>
                    <div className="flex">
                        <img className="rounded-full w-[20px] h-[20px] ml-[16px] mt-4" src={rating} alt="rating_star"/>
                        <div className="mt-4 w-[734px] h-[19px] mx-[5px] font-bold">{+" 4.0 "+"(1.9K ratings)"+" "+"Rs 250 for two"}</div>
                    </div>
                    
                    <div className="w-[726px] h-[17px] mx-[20px] my-2 text-orange-500 font-bold text-sm">Chinese, Asian</div>
                   
                   
                    <div className="w-[726px] h-[47.2px] py-1 mx-5 flex">
                        
                        
                        <div>
                          <div className="w-[7px] h-[7px]">●</div>
                          <div className="w-[1px] h-[11px] mt-1 ml-[1px]">‖</div>
                          <div className="w-[1px] h-[11px] mt-1 ml-[1px]">‖</div>
                          <div className="w-[7px] h-[7px]">●</div>
                          
                        </div>


                        <div className="w-[707px] h-[47.1px] pr-[16px] ml-3">

                            <div className="w-[691px] h-[19.1px] mb-[2px] mt-1 flex">
                                <div className="font-bold w-[39.5px] h-[19px] text-sm">Outlet</div>
                                <div className="w-auto h-[19.1px] ml-3 text-gray-500 font-medium text-sm ">Old Mahabalipuram Road OMR</div>
                            </div>

                            <div className="w-[691px] h-[18px] mt-2">
                                <div className="w-auto h-[18px] font-bold text-sm mt-4">20-30 mins</div>
                            </div>

                        </div>


                        
                        
                        
                    </div>

                    <div className="mt-8 mb-3 w-[766px] ">
                        <hr className="border-t-1 border-slate-200 "/> 
                    </div>


                    <ul>
                        <li className="flex mx-4 ">
                            <img className="w-5 h-5 mr-2" alt="delivery_image" src={delivery_icon}/>
                            <div className="text-sm text-gray-600">
                                <b> 4.0 kms </b>
                                 | ₹39 Delivery fee will apply
                            </div>
                        </li>
                    </ul>
                    
                </div>

            </div>

            

            <div className="test-white bg-gray w-[768px] h-[3105px] mx-[16px] my-[24px]">


              
               {resmenu.map((item,index)=> (

                     (index>0) && ( <div key={index}>
                                
                                     <RestaurantAccordionList data={item?.card?.card?.itemCards}    />
                                 
                                   </div> )
                
                  
                   
               ))}

    
        </div>

 

        </div>
        
    );
}

export default RestaurantMenu;