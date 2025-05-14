import { useEffect , useState } from "react"
import { restaurant_menu } from "../utils/constant";
import { useParams } from "react-router-dom";

export const useRestaurantMenu=()=>{

    const {resId} = useParams();

    const[resMenu,setResMenu]=useState();

    useEffect(()=>{
        getData();
    },[]);


    const getData= async()=>{
        const data = await fetch(restaurant_menu+resId);
        const jsonValue = await data.json();
        const resdata = jsonValue?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

         setResMenu(resdata?.data);
        
    }

    return resMenu;
};