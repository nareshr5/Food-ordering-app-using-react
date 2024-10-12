import { useSelector } from "react-redux";
import { CDN_URL_FOR_DISHES } from "../utils/constant";
import {useState} from "react";

const WhatsOnMind = () =>{
    const {whatsOnMind}= useSelector((store) =>store.rec);
    // const  {imageId} = whatsOnMind?.

    const [value,setValue] = useState(0);

    if(!whatsOnMind) return null;

    const handleLeftClick=() =>{
        setValue((prev) => prev-100);
        console.log(value);
    }

    const handleRightClick=()=>{
        setValue((prev)=> prev+100);
        console.log(value);
    }

    return(
    <div className="p-4   m-auto  w-[1007.22px]  h-[256px]  flex flex-col"> {/** removed this from here --> border-b-2 */}
        
        <div className="flex justify-between">
            <h1 className="font-bold text-2xl mb-4">What's on your mind?</h1>

            <div className="flex ">
                 <button className="bg-gray-200 rounded-full px-3 mx-1 " onClick={() =>handleLeftClick()}>👈</button>
                <button className="bg-gray-200 rounded-full px-3 mx-1" onClick={()=>handleRightClick()}>👉</button>
                
            </div>
        </div>
        
         <div className= {` w-full overflow-hidden  -translate-x-[${value}px] duration-500`}> 
            {/* <div className=" w-[1007.22px] "> */}

            <div className="flex pl-4 justify-evenly ">

                {whatsOnMind.map((res,index) => (

                   // index <6 && 
                     <img key={index} className="w-36 h-[180px] pr-6 object-cover" alt="whats_onmind_images" src={CDN_URL_FOR_DISHES+res?.imageId}/>
                    
                    )

                    )}
            </div>

            
            
            
            {/* <img className="w-36 h-[180px] pr-6 object-cover" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_144,h_180/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Idli.png" alt="food_image" />
            <img className="w-36 h-[180px] pr-6 object-cover" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_144,h_180/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Idli.png" alt="food_image" />
            <img className="w-36 h-[180px] pr-6 object-cover" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_144,h_180/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Idli.png" alt="food_image" />
            <img className="w-36 h-[180px] pr-6 object-cover" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_144,h_180/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Idli.png" alt="food_image" />
            <img className="w-36 h-[180px] pr-6 object-cover" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_144,h_180/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Idli.png" alt="food_image" /> */}
        
        </div>
        {/* <div className="border-gray my-9"></div> */}
    </div>
    );
};

export default WhatsOnMind;