import { CDN_URL } from "../utils/constant";
import rating from "../images/rating.png"

const Whatsonmindcard = (props) => {
    const {cloudinaryImageId,name,avgRating,cuisines,areaName,sla} = props?.data;
    //console.log(props);

    return(
        <div className="w-[273px] h-[320px]  pr-8 cursor-pointer ">
            
            <div>
                <img  src={CDN_URL+cloudinaryImageId} alt="restaurant_image" className=" object-cover w-[273px] h-[182px] rounded-xl"/>
            </div>

            <div className="pl-2 pt-1">
                <div className="w-[261px] h-[24px] font-bold text-lg">{name}</div>
                    <div className="flex items-center">
                        <img className="rounded-full w-[20px] h-[20px] mr-1" src={rating} alt="rating_star"/>
                        <div className="font-bold text-sm">{avgRating+" "+"."+" "+sla?.slaString}</div>
                    </div>
                    
                    <div className=" text-slate-500">{cuisines}</div>
                    <div className=" text-slate-500">{areaName}</div>
            </div>


        



            
        {/* <div>
            <img  src={CDN_URL+list[3]?.card?.card?.info?.cloudinaryImageId} alt="restaurant_image" className="w-[273px] h-[182px] rounded-xl"/>
        </div>

        <div className="pl-2 pt-1">
            <div className="w-[261px] h-[24px] font-bold text-lg">{list[3]?.card?.card?.info?.name}</div>
                <div className="flex items-center">
                    <img className="rounded-full w-[20px] h-[20px] mr-1" src={rating} alt="rating_star"/>
                    <div className="font-bold text-sm">{list[3]?.card?.card?.info?.avgRating+" "+"."+" "+list[3]?.card?.card?.info?.sla?.slaString}</div>
                </div>
                
                <div className=" text-slate-500">{list[3]?.card?.card?.info?.cuisines}</div>
                <div className=" text-slate-500">{list[3]?.card?.card?.info?.areaName}</div>


        </div> */}



    </div>



    );
};

export default Whatsonmindcard;