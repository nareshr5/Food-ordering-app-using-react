import { useEffect } from "react"
import { restaurant_menu } from "../utils/constant";
import { useParams } from "react-router-dom";

const useRestaurantMenu=()=>{

    const {resId} = useParams();

    useEffect(()=>{
        getData();
    },[]);


    const getData= async()=>{
        const data = await fetch(restaurant_menu+resId);
        const jsonValue = await data.json();
        const resdata = jsonValue?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

        return resdata;
    }
}