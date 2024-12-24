import RestaurantAccordion from "./resaccordion";
import { useState } from "react";

const RestaurantAccordionList = (props) =>{

    const {data} =props;
    const [accordionData,useAccordionData]=useState(data);
    //console.log(accordionData);

   if(!data) return null;
   
    return(

        <div>
            {accordionData.map((acc, index) =>(
                <div key={index}>
                  <RestaurantAccordion details={acc} />
                </div>
            ))}

        </div>

        
        // <div>

           
        //       <RestaurantAccordion details={data?.card?.info} />
           
        // </div>
 
        
    );

}

export default RestaurantAccordionList;