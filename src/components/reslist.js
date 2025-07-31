import { useState ,useEffect} from "react";
import ResCard from "./rescard";
import { useSelector } from "react-redux";


import { useDispatch } from "react-redux";
import { resList_api , reswithonlinedelivery_api} from "../utils/constant";
import { addRestaurantList } from "../utils/restaurantslice";
import { addOnlineDelivery } from "../utils/restaurantslice";

import right from "../images/right.png"
import left from "../images/left.png";
import Shimmer from "./shimmer";


const ResList = (props) =>{

    useEffect(()=>{
        getResList();
        getResWithOnlineDelivery();
    },[])


 
    const {title,type}=props;

    // the data is dispatched to the store and then used 
    // we can also use it using a usestate variable
    const {resList,resWithOnlineDelivery} = useSelector((store) => store.res);
    const [value,setValue] = useState(0);

    const dispatch = useDispatch();
 
    
   

    const getResList = async () =>{
            const data = await fetch(resList_api);
            const jsonValue = await data.json();
            const resList = jsonValue?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            //console.log(resList);
            dispatch(addRestaurantList(resList));

            //resWithOnlineDelivery(resList);

        }


    const getResWithOnlineDelivery = async () =>{
            const data = await fetch(reswithonlinedelivery_api);
            const jsonValue = await data.json();
            //console.log(jsonValue);
            const onlineDelivery = jsonValue?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
           // console.log(onlineDelivery);
            dispatch(addOnlineDelivery(onlineDelivery));
        }    

    

    // if(!resList) return null;
    // if(!resWithOnlineDelivery) return null;

    if(!resList) return <Shimmer/>
    if(!resWithOnlineDelivery) return <Shimmer/>

    
    

    const handleLeftClick=() =>{
        if(value>=0){
            setValue((prev) => prev-56)
            console.log(value);
        }
        
    }

    const handleRightClick=() => {
        if(value<=448){
            setValue((prev) => prev+56)
            //console.log(value);
        }
        
    }

    


    if(type==="top restaurants")return(
        <div className="p-4 w-[1007px] h-[380px] m-auto cursor-pointer ">
            <div className="flex items-center justify-between w-full">

                <div className="mb-4 text-2xl font-bold">{title}</div>

                <div className="mx-2 rounded-full p-1 mb-2 ">
                    <button className="bg-gray-200 rounded-full px-3 mx-1 h-10 hover:bg-orange-400 " onClick={handleLeftClick}><img src={left} alt="left" className="w-5 h-5 rounded-full "/></button>
                    <button className="bg-gray-200 rounded-full px-3 mx-1 h-10  hover:bg-orange-400" onClick= {handleRightClick}><img src={right} alt="right" className="w-5 h-5 rounded-full"/></button>
                </div>

            </div>


             {/* translation functionality added to the resturants */}

            <div className="w-full overflow-hidden">

                <div className="flex  pl-4 duration-1000" style={{translate:`-${value}%`}} >
                    {resList.map((res,i)=> (
                    
                            
                           <span key={res?.info?.id}><ResCard resList={res} type={type}  /></span> 
                            
                        
                    )
                    
                    )}
                </div>

            </div>
            
            
            
        </div>
    );

    if(type==="online delivery")return(
        <div className=" w-[1007.2px] h-[592.6px] m-auto cursor-pointer">
            <div className="mb-4 text-2xl font-bold">{title}</div>
            <div className="mx-[16px] my-[32px] flex flex-wrap justify-between ">
            {resWithOnlineDelivery.map((res ,index)=> (
                
                 <span key={res?.info?.id}>
               
                    <ResCard  resList={res} type={type}   />
                 </span>
                    
                 
            )
            
            )}
            </div>
            
        </div>
    );
}

export default ResList;