
import { useState } from "react";
import { resMenuImage} from "../utils/constant";
import nonveg_logo  from "../images/nonveg_logo.png";
import veg_logo from "../images/veg_logo.png";

const RestaurantAccordion = (props) =>{
    const {details} = props;
    const {category,imageId,price,name,description,ratings,itemAttribute} =details?.card?.info;
    const {rating,ratingCountV2}=ratings?.aggregatedRating;
    const {vegClassifier} = itemAttribute;

    // rating >=4 (thick green) , <4 (light green) else yellow
   // console.log(details);
    const [isopen,setIsOpen]=useState(true);
    const [count,setCount]=useState(0);
 
   // dynamic datas to get  --> accordion title , rating , descriptions ,
   //console.log(data);
   // working on to get hte dynamic data ( the dyanamic data is in nested format , working on it)
   
    return(

        // <div>
        //     RestaurantAccordion
        // </div>

        <div>


             <button className="w-[768px] h-[20.3px] mb-6 pr-4 flex justify-between">
                <h3 className="font-extrabold w-[154.3px] h-[20px]" >{category}</h3>
                
                <div className="w-4 h-5" onClick={() => setIsOpen(!isopen)}>🔺</div>
                </button>

            <div>


             {isopen && <div className="w-[768px] h-[3061]">
                    <div className="w-[768px] h-[203px]">
                        <div className="w-[768px] h-[174px] my-1">
                            <div className="w-[768px] h-[174px] flex">
                                <div className="w-[552px] h-[174px] ">
                                    {/* <div className="w-[552px] h-[16px] mb-1">🔺</div> */}
                                    <div className="w-[552px] h-5 mb-1 ">
                                        { (vegClassifier=="NONVEG")? <img  className="w-5 h-5" src={nonveg_logo} alt="veg_logo"/> :  <img  className="w-5 h-5" src={veg_logo} alt="veg_logo"/>}
                                        
                                        
                                    </div>
                                    <div className="w-[552px] h-5 font-bold">Combo for 1 Non-Veg</div>
                                    <div className="w-[552px] h-[19px] mt-1">
                                        <div className="w-[35px] h-[19px] mr-1">
                                            <span className="w-[35px] h-[19px] mr-1 font-semibold"> 
                                                <div className="w-[35px] h-[19px]">
                                                Rs{price/100}
                                                </div>
                                            </span>
                                        
                                        </div>
                                    </div>

                                    <div className="w-[552px] h-4 mt-3 flex text-sm">
                                        <div className="w-[14px] h-[14px] mr-1">⭐</div>
                                        {(rating>3) ?<div className="w-[16.5px] h-[16px] mx-1 text-green-800 font-bold" >{rating}</div> :<div className="w-[16.5px] h-[16px] mx-1 text-yellow-500 font-bold" >{rating}</div>}
                                        <div className="w-[18.5px] h-[16px] mx-1 text-gray-500 font-semibold">({ratingCountV2})</div>

                                    </div>

                                    <div className="w-[552px] h-[50px]">
                                        <div className="w-[552px] h-[38px] mt-3 text-gray-500 font-semibold">
                                        Serves 1 | {description}
                                        </div>
                                    
                                    </div>

                                </div>

                                <div className="w-[156px] h-[174px] ml-[60px] ">
                                    <button className="w-[165px] h-[144px]">
                                    <img className="w-[156px] h-[144px] rounded-lg object-cover" alt="food_image" src={resMenuImage+imageId}/>
                                    </button>

                                    <div className="w-[156px] h-[58px]">
                                        <div className="w-[156px] h-[58px]">
                                        <div className="w-[156px] h-[58px]">
                                            <div className="w-[118px] h-[38px] border-black -my-5 mx-auto">

                                                {/* addin some functionality to the ITEM ADD button */}
                                               {(count==0) ? 
                                               
                                               (<button className= " w-[118px] h-[38px] text-green-800 font-bold bg-white rounded-lg border-2 border-slate-300 hover:bg-slate-300 " onClick={() => setCount(count+1) }>Add</button>)  :
                                               
                                               (<div className="absolute flex justify-evenly w-[118px] h-[38px] text-green-800 font-bold bg-white rounded-lg border-2 border-slate-300 hover:bg-slate-300" ><button className="text-green-800 font-extrabold text-3xl mx-2 -my-3 ">-</button><span className="mx-2 my-1">{count}</span><button className="text-green-800 font-extrabold text-2xl mx-2 -my-3" >+</button></div>) 
                                               
                                               }
                                               
                                                


                                            </div>
                                        </div>
                                        </div>
                                        
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>


                    



                </div>
              }

              <div className="w-[768px] border-b-2 border-slate-300 mt-1 mb-5"> </div>



            </div>
        </div>


        
    );
}

export default RestaurantAccordion;