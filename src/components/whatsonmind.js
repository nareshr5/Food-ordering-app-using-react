import { useSelector } from "react-redux";
import { CDN_URL_FOR_DISHES } from "../utils/constant";

const WhatsOnMind = () =>{
    const {whatsOnMind}= useSelector((store) =>store.rec);
    // const  {imageId} = whatsOnMind?.

    if(!whatsOnMind) return null;
    return(
    <div className="p-4   m-auto  w-[1007.22px]  h-[256px]  flex flex-col"> {/** removed this from here --> border-b-2 */}
        <h1 className="font-bold text-2xl mb-4">What's on your mind?</h1>
        <div className="flex pl-4 justify-evenly">

            {whatsOnMind.map((res,index) => (

                   index <6 && <img key={res} className="w-36 h-[180px] pr-6 object-cover" alr="whats_onmind_images" src={CDN_URL_FOR_DISHES+res?.imageId}/>
                )
            
            )}
            
            
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