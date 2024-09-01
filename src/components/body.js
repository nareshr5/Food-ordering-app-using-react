import ResRecomendations from "./resrecomendations";
import WhatsOnMind from "./whatsonmind";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addBestPlacesToEat } from "../utils/recomedationSlice";
import BestCuisines from "./bestcuisines";
import {addBestCuisines} from "../utils/recomedationSlice";
const Body = () =>{

    const dispatch = useDispatch();

    useEffect(()=>{
        getBestPlacesToEat();
        getBestCuisines()
    });

    const getBestPlacesToEat = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonValue = await data.json();
        const bestPlacesToEat = jsonValue?.data.cards[6]?.card?.card?.brands;
        // console.log(bestPlacesToEat);
        dispatch(addBestPlacesToEat( bestPlacesToEat));
    }

    const getBestCuisines = async () =>{
        const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonValue = await data.json();
        const Cuisines = jsonValue?.data.cards[7]?.card?.card?.brands;
        //console.log(jsonValue);
        dispatch(addBestCuisines(Cuisines));



    }

    return(
        // <div className="h-96 w-[1172px]  m-auto mt-4  bg-slate-400  flex flex-col"> // don't add style in this page
        <div>
            
          {/* <img className="h-[50%]" alt="image_logo" scr="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png" /> */}

        
            <WhatsOnMind/>
            <div className="py-[32px] w-screen"></div>
            <ResRecomendations title="Best Places to Eat Across Cities" />
            <div className="py-[32px] w-screen"></div>
            <BestCuisines title="Best Cuisines Near Me" />
            <div className="py-[32px] w-screen"></div>

                 
        </div>
    );
};

export default Body;