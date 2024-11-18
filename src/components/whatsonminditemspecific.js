import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/whatsonmindslice";

import {Whatsonmind_itemspecific_api} from "../utils/constant";

const Whatsonminditemspecific = () =>{

    // this use effect and getdata is causing some error
    // useEffect(() =>{
    //    // getData();
    //     console.log("hello there")
    // },[]);

    // const dispatch = useDispatch();

    // const getData = async() =>{
    //     const data = await fetch(Whatsonmind_itemspecific_api);
    //     const jsonvalue = await data.json();
    //     dispatch(addItem(jsonvalue?.data?.cards));
    //     console.log(jsonvalue?.data?.cards);
        
    // }

   

    return(
        <div>hello to whatonminditemspecific page</div>
    );
};

export default Whatsonminditemspecific;