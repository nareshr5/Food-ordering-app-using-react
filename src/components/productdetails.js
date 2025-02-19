import { useState ,useEffect} from "react";
import { veg_logo} from "../utils/constant";


const Productdetails = (props) =>{

    
    const {data} = props;
    const {quantity}=data;
    const {price}=data?.details?.card?.info;
    const [count,setcount]=useState(data?.quantity)


    
    return(
        <div>
            <div className="px-[30px]">
                <div className="py-[10px] flex justify-between">

                    <div className="flex">
                        <img className="w-7 h-7 object-cover" src={veg_logo} alt="veg_icon" />
                        <div className="ml-[5px] mr-[14px] ">{data?.details?.card?.info?.name}</div>
                        
                    </div>


                    <div className="flex">
                        <div className="border-2 border-slate-300 h-[32px] w-[70px] flex justify-around">
                            <div><button onClick={() => {
                           
                            count!=1 && setcount(count-1)
                            }} >-</button></div>

                            
                            <div>{count}</div>

                            

                            <div><button onClick={() =>{
                                
                                count>0 && setcount(count+1)

                                
                                
                                
                            }} >+</button></div>
                        </div>
                        <div className="ml-5"><span>₹{(price)/100*count}</span></div> 

                        {/* <div className="ml-5"><span>₹{(item?.details?.card?.info?.defaultPrice)*(item?.quantity)}</span></div> */}
                    </div>


                </div>
            </div>
        </div>
        
    );
};

export default Productdetails;