import { useEffect , useState} from "react";
import {whatsonmindcontent_api, whatsonmindcontent_api_end} from "../utils/constant";

import Whatsonmindcard from "./whatsonmindcard";

import { useParams } from "react-router-dom";
import { collection } from "firebase/firestore/lite";
import Shimmer from "./shimmer";



const Whatsonmindcontent = () => {

    const [list,setList] = useState([]);

    //  const collection_id=useParams();  -> this will give the resid inside an object , so we are destructuring it below

    const {collection_id}=useParams();
    //console.log(collection_id);

    useEffect(()=>{
        getData();
    },[]);

    

    const getData = async () =>{
        const data = await fetch(whatsonmindcontent_api+collection_id+whatsonmindcontent_api_end);
        const jsonValue = await data.json();
        const result = jsonValue?.data?.cards;
        setList(result);
        
        
    }

    // this 2 conditions are important
    if(!list) return null  // i this is not added the 1st whatson mind item is showing error;
    
    //if(list.length==0) return null;
    if(list.length===0) return <Shimmer/>
   

    return(
        <div className="mx-3">
        
            <div className="text-3xl font-semibold my-2 mx-2">{list[0].card.card.title}</div>
            <div className=" my-4 text-slate-500 mx-2">{list[0].card.card.description}</div>

            <div className="flex flex-wrap my-5 ">

                    {list.map((item,i) =>(

                      (i>=3)  && (<div className="mx-6 my-1">  
                                <Whatsonmindcard  data={item?.card?.card?.info} key={i}/> 
                            </div> )
                         
                           
                    ))};

                   

            </div>
        </div>
    )
}

export default Whatsonmindcontent;