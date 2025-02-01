import { useState ,useEffect} from "react";
import ResCard from "./rescard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { resList_api } from "../utils/constant";
import { addRestaurantList } from "../utils/restaurantslice";


const ResList = (props) =>{


    const {title,type}=props;

    const {resList,resWithOnlineDelivery} = useSelector((store) => store.res);
    const [value,setValue] = useState(0);

    const dispatch = useDispatch();
    useEffect(()=>{
        getResList();
    },[])



    const getResList = async () =>{
            const data = await fetch(resList_api);
            const jsonValue = await data.json();
            const resList = jsonValue?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            console.log(resList);
            dispatch(addRestaurantList(resList));
            
        }

    const navigate = useNavigate();

    if(!resList) return null;
    if(!resWithOnlineDelivery) return null;

    
    

    const handleLeftClick=() =>{
        if(value>=0){
            setValue((prev) => prev-56)
            console.log(value);
        }
        
    }

    const handleRightClick=() => {
        if(value<=448){
            setValue((prev) => prev+56)
            console.log(value);
        }
        
    }


    if(type==="top restaurants")return(
        <div className="p-4 w-[1007px] h-[380px] m-auto cursor-pointer">
            <div className="flex items-center justify-between w-full">

                <div className="mb-4 text-2xl font-bold">{title}</div>

                <div className="mx-2 rounded-full p-1 mb-2">
                    <button className="bg-gray-200 rounded-full px-3 mx-1 h-10 " onClick={handleLeftClick}>👈</button>
                    <button className="bg-gray-200 rounded-full px-3 mx-1 h-10" onClick= {handleRightClick}>👉</button>
                </div>

            </div>


             {/* translation functionality added to the resturants */}

            <div className="w-full overflow-hidden">

                <div className="flex  pl-4 duration-1000" style={{translate:`-${value}%`}} >
                    {resList.map((res,i)=> (
                    
                            < span onClick={() => navigate("/restaurantmenu")}>
                              <ResCard resList={res} type={type} key={i} />
                            </span >
                            
                            
                    
                            
                        
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
            {resWithOnlineDelivery.map((res)=> (
                
                 <span onClick={() => navigate("/restaurantmenu")}>
                    <ResCard  resList={res} type={type} key={res}  />
                 </span>
                    
                 
            )
            
            )}
            </div>
            
        </div>
    );
}

export default ResList;