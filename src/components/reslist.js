import { useState } from "react";
import ResCard from "./rescard";
import { useSelector } from "react-redux";


const ResList = (props) =>{


    const {title,type}=props;

    const {resList,resWithOnlineDelivery} = useSelector((store) => store.res);
    const [value,setValue] = useState(0);

    if(!resList) return null;
    if(!resWithOnlineDelivery) return null;

    
    

    const handleLeftClick=() =>{
        if(value>=0){
            setValue((prev) => prev-56)
            console.log(value);
        }
        
    }

    const handleRightClick=() => {
        if(value<=448){
            setValue((prev) => prev+56)
            console.log(value);
        }
        
    }


    if(type==="top restaurants")return(
        <div className="p-4 w-[1007px] h-[380px] m-auto cursor-pointer">
            <div className="flex items-center justify-between w-full">

                <div className="mb-4 text-2xl font-bold">{title}</div>

                <div className="mx-2 rounded-full p-1 mb-2">
                    <button className="bg-gray-200 rounded-full px-3 mx-1 h-10 " onClick={handleLeftClick}>👈</button>
                    <button className="bg-gray-200 rounded-full px-3 mx-1 h-10" onClick= {handleRightClick}>👉</button>
                </div>

            </div>


             {/* translation functionality added to the resturants */}

            <div className="w-full overflow-hidden">

                <div className="flex  pl-4 duration-1000" style={{translate:`-${value}%`}} >
                    {resList.map((res,i)=> (
                    
                            <ResCard resList={res} type={type} key={i} />
                    
                            
                        
                    )
                    
                    )}
                </div>

            </div>
            
            
            
        </div>
    );

    if(type==="online delivery")return(
        <div className=" w-[1007.2px] h-[592.6px] m-auto cursor-pointer">
            <div className="mb-4 text-2xl font-bold">{title}</div>
            <div className="mx-[16px] my-[32px] flex flex-wrap justify-between ">
            {resWithOnlineDelivery.map((res)=> (
                
                    <ResCard resList={res} type={type} key={res}/>
                 
            )
            
            )}
            </div>
            
        </div>
    );
}

export default ResList;