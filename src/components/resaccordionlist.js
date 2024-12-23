import RestaurantAccordion from "./resaccordion";
import { useState } from "react";

const RestaurantAccordionList = (props) =>{

    const {data} =props;
    //const [accordionData,useAccordiondata] = useState(data);
    //console.log(data);
    return(
        // {accordionData.map((d)=>(
            <div>
                <RestaurantAccordion  accordion ={data?.card?.card?.itemCards}/>
            </div>
    //     ))
    // }
        
    );

}

export default RestaurantAccordionList;