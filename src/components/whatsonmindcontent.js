import { useEffect , useState} from "react";
import {whatsonmindcontent_api} from "../utils/constant";

import Whatsonmindcard from "./whatsonmindcard";
import { CDN_URL } from "../utils/constant";
import rating from "../images/rating.png"


const Whatsonmindcontent = () => {

    const [list,setList] = useState([]);

    useEffect(()=>{
        // console.log("loaded");
        getData();

    },[]);

    const getData = async () =>{
        const data = await fetch(whatsonmindcontent_api);
        const jsonValue = await data.json();
        const result = jsonValue?.data?.cards;
        
        setList(result);
        
    }

    console.log(list);

    if(list.length==0) return null;
   

    return(
        <div className="mx-3">
        
            <div className="text-3xl font-semibold my-2">{list[0].card.card.title}</div>
            <div className=" my-4 text-slate-500">{list[0].card.card.description}</div>

            <div className="">
                    {/* {list.map((item,i) =>(

                           i>=3 ?  <Whatsonmindcard /> : ""
                    ))} */}

                    <div>
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
                    </div>
            </div>
        </div>
    )
}

export default Whatsonmindcontent;