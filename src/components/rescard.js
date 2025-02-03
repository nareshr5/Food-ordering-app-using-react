import { CDN_URL } from "../utils/constant";

import rating from "../images/rating.png";
import { NavLink } from "react-router-dom";

const ResCard = (props) =>{
    const {resList,type} =props;

    
    const {name,avgRating,sla,cuisines,areaName,cloudinaryImageId,id} = resList?.info;
    const {slaString}=sla;
    

    // console.log(type);
    
    if(type==="top restaurants") return(
        <NavLink to={"/restaurantmenu/"+id}>
            <div className="w-[273px] h-[284px]   pr-8 ">

                
            
                <img className="w-[273px] h-[182px] object-cover rounded-2xl" alt="restaurant_image" src={CDN_URL+cloudinaryImageId} />
                <div className="pl-2 pt-1">
                <div className="w-[261px] h-[24px] font-bold text-lg">{name}</div>
                    <div className="flex items-center">
                        <img className="rounded-full w-[20px] h-[20px] mr-1" src={rating} alt="rating_star"/>
                        <div className="font-bold text-sm">{avgRating+" "+"."+" "+slaString}</div>
                    </div>
                    
                    <div className=" text-slate-500">{cuisines}</div>
                    <div className=" text-slate-500">{areaName}</div>
                </div>
                
            </div>
      </NavLink>
        );

        if(type==="online delivery") return(

            <NavLink to={"/restaurantmenu/"+id}>

                    <div className="w-[220px] h-[248.3px]">
                    
                        <img className=" w-[220px] h-[146.5px] object-cover rounded-2xl" alt="restaurant_image" src={CDN_URL+cloudinaryImageId} />
                        <div className="pl-2 pt-1">
                        <div className="w-[207px] h-[24px] font-bold text-lg">{name}</div>
                            <div className="flex items-center">
                                <img className="rounded-full w-[20px] h-[20px] mr-1" src={rating} alt="rating_star"/>
                                <div className="font-bold text-sm">{avgRating+" "+"."+" "+slaString}</div>
                            </div>
                            <div className=" text-slate-500">{cuisines}</div>
                            <div className=" text-slate-500">{areaName}</div>
                        </div>
                    </div>

              </NavLink>
                );
    
    };


export default ResCard;