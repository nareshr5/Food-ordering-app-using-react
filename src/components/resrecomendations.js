import React from "react";
import { useSelector } from "react-redux";

const ResRecomendations = (props) =>{

    const {title} = props;

    const {bestPlaces}= useSelector((store) => store.rec);

    if(!bestPlaces || bestPlaces.length === 0) return ;
    // console.log(bestPlaces[0]);

    

    return(
        <div className=" m-auto w-[1172px] h-[251px]  flex flex-col">
         <div className="absolute w-[1171.13px]  h-[251px]">
            <h2 className="text-2xl font-bold mx-6">{title}</h2>

            <div className="w-[1171.13px] h-[207px]  flex flex-wrap text-gray mt-4 text-center justify-evenly ">

                
               {bestPlaces.map((place,index) =>(
                //    console.log(index)
                    ((index<=10) && <div className="p-4 w-[260.78px] h-[53px] border border-gray rounded-xl cursor-pointer" key={place.text} >{place.text}</div>) 
                
               ))}

                <div className="p-4 w-[260.78px] h-[53px] border border-gray rounded-xl font-bold " >More ...</div>
                

    
            </div>

        </div>
        </div>
    );
};

export default ResRecomendations;