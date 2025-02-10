import { useSelector } from "react-redux";
import { CDN_URL_FOR_DISHES } from "../utils/constant";
import {useEffect, useState} from "react";

import { useNavigate } from "react-router-dom";
import { addWhatsOnMind } from "../utils/recomedationSlice";
import { useDispatch } from "react-redux";
import { whatonmind_api} from "../utils/constant";

import right from "../images/right.png";
import left from "../images/left.png";





const WhatsOnMind = () =>{

    const {whatsOnMind}= useSelector((store) =>store.rec);
    //const  {entityId} = whatsOnMind;

    
    
    

    const [value,setValue] = useState(0);

    const dispatch =useDispatch();

    useEffect(()=>{
        getWhatsOnMind();
    },[])

     const getWhatsOnMind = async () =>{
        const data = await fetch(whatonmind_api);
        const jsonValue = await data.json();
        
        const dishImages = jsonValue?.data?.cards[0]?.card?.card?.imageGridCards?.info;
        // console.log(dishImages);
        dispatch(addWhatsOnMind(dishImages))

    }

    const navigate = useNavigate();

    if(!whatsOnMind) return null;

    
   

    

    const handleLeftClick=() =>{
        if(value>=0){
            setValue((prev)=> prev-325);
            console.log(value);
        }
        
    }

    const handleRightClick=()=>{
        if(value<=975){
            setValue((prev)=>prev+325);
            console.log(value);
        }
        
    }

    const getcollectionid=(fullstring)=>{
        
        const string=fullstring.split("id=");
       
        // this will give you the collection id
        const collection_id=string[1].slice(0,5);

        return collection_id;
   
    }

    return(
    <div className="p-4   m-auto  w-[1007.22px]  h-[256px]  flex flex-col"> {/** removed this from here --> border-b-2 */}
        
        <div className="flex justify-between">
            <h1 className="font-bold text-2xl mb-4">What's on your mind?</h1>

            <div className="flex ">
                 <button className="bg-gray-200 rounded-full px-3 mx-1 " onClick={() => 
                  handleLeftClick() 
                 
                 }><img src={left} alt="left_arrow" className="w-5 h-5"/></button>
                

                <button className="bg-gray-200 rounded-full px-3 py-1 mx-1" onClick={()=>
                    handleRightClick() 
                     }><img alt="rigth_arrow" src={right} className="w-5 h-5"/></button>
                
            </div>
        </div>
        
         <div className= " w-full overflow-hidden  "> 
            {/* <div className=" w-[1007.22px] "> */}

            <div className="flex pl-4 justify-evenly ">

                {whatsOnMind.map((res,index) => (

                   // index <6 && 
                  


                     <img  style={{translate:`-${value}%`}}
                     key={index} className=" w-36 h-[180px] pr-6 object-cover cursor-pointer duration-1000" alt="whats_onmind_images" src={CDN_URL_FOR_DISHES+res?.imageId} 
                     
                     onClick={() => {

                        let collection_id=res?.entityId;
                     

                        if(collection_id.length>10){
                            // the if conditon is to check whether we got a string or the collectionid directly
                             collection_id=getcollectionid(res?.entityId);
                        }
                       
                        
                        navigate("/whatsonmindcontent/"+collection_id)
                     } }/>

                    
                    )

                    )}
            </div>

            
            
            
           
        
        </div>
       
    </div>
    );
};

export default WhatsOnMind;