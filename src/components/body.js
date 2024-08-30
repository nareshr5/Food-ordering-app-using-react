import ResRecomendations from "./resrecomendations";
import WhatsOnMind from "./whatsonmind";
import { useEffect } from "react";
const Body = () =>{

    useEffect(()=>{
        getBestPlacesToEat();
    });

    const getBestPlacesToEat = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonValue = await data.json();
        const bestPlacesToEat = jsonValue?.data.cards[6]?.card?.card?.brands;
        // console.log(bestPlacesToEat);


    }

    return(
        <div className="h-96 w-3/4 m-auto mt-4  bg-slate-400  flex flex-col">
            
          {/* <img className="h-[50%]" alt="image_logo" scr="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png" /> */}

        <div>
            <WhatsOnMind/>
            <ResRecomendations title="Best Places to Eat Across Cities data={bestPlacesToEat}" />
        </div>          
        </div>
    );
};

export default Body;