import ResRecomendations from "./resrecomendations";
import WhatsOnMind from "./whatsonmind";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addBestPlacesToEat } from "../utils/recomedationSlice";
import BestCuisines from "./bestcuisines";
import {addBestCuisines} from "../utils/recomedationSlice";
import ResList from "./reslist";
import { addRestaurantList } from "../utils/restaurantslice";
import { addWhatsOnMind } from "../utils/recomedationSlice";
import { addOnlineDelivery } from "../utils/restaurantslice";

import { whatonmind_api , resList_api  ,reswithonlinedelivery_api, bestPlacesToEat_api, bestCuisines_api} from "../utils/constant";



const MainContainer=()=>{

    const dispatch = useDispatch();

    
    

    useEffect(()=>{
        getWhatsOnMind();
        getBestPlacesToEat();
        getBestCuisines();
        getResList();
        getResWithOnlineDelivery();
        
    });

    const getWhatsOnMind = async () =>{
        const data = await fetch(whatonmind_api);
        const jsonValue = await data.json();
        
        const dishImages = jsonValue?.data?.cards[0]?.card?.card?.imageGridCards?.info;
        // console.log(dishImages);
        dispatch(addWhatsOnMind(dishImages))

    }

    const getResList = async () =>{
        const data = await fetch(resList_api);
        const jsonValue = await data.json();
        const resList = jsonValue?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        //console.log(resList);
        dispatch(addRestaurantList(resList));
        
    }

    const getResWithOnlineDelivery = async () =>{
        const data = await fetch(reswithonlinedelivery_api);
        const jsonValue = await data.json();
        //console.log(jsonValue);
        const onlineDelivery = jsonValue?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
       // console.log(onlineDelivery);
        dispatch(addOnlineDelivery(onlineDelivery));
    }

    const getBestPlacesToEat = async () =>{
        const data = await fetch(bestPlacesToEat_api);
        const jsonValue = await data.json();
        const bestPlacesToEat = jsonValue?.data.cards[6]?.card?.card?.brands;
        // console.log(bestPlacesToEat);
        dispatch(addBestPlacesToEat( bestPlacesToEat));
    }

    const getBestCuisines = async () =>{
        const data = await fetch (bestCuisines_api);
        const jsonValue = await data.json();
        const Cuisines = jsonValue?.data?.cards[7]?.card?.card?.brands;
        //console.log(jsonValue);
        dispatch(addBestCuisines(Cuisines));
    }



    return(
        // <div className="h-96 w-[1172px]  m-auto mt-4  bg-slate-400  flex flex-col"> // don't add style in this page
    <div>
        <WhatsOnMind/>
            <div className="my-[32px] w-[1008px] mx-auto border border-slate-200 "></div>
            <ResList title="Top Restaurants chains" type="top restaurants"/>
            <div className="my-[32px] w-[1008px] mx-auto border border-slate-200"></div>


            <ResList title="Restaurants with online food delivery" type="online delivery"/>
            <div className="my-[32px] w-[1172px] mx-auto border border-slate-200"></div>
            <ResRecomendations title="Best Places to Eat Across Cities" />
            <div className="py-[32px] w-screen"></div>
            <BestCuisines title="Best Cuisines Near Me" />
            <div className="py-[32px] w-screen"></div>
    </div>
);
};

export default MainContainer;