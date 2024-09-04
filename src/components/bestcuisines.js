import { useSelector } from "react-redux";

const BestCuisines = (props) =>{
    const {title} = props;

    const {bestCuisines}= useSelector((store) => store.rec);

    if(!bestCuisines || bestCuisines.length === 0) return ;
    console.log(bestCuisines);

    

    return(
        <div className="m-auto w-[1172px] h-[251px] flex flex-col">
        <div className="absolute w-[1171.13px]  h-[251px]">
            <h2 className="text-2xl font-bold mx-6">{title}</h2>

            <div className="w-[1171.13px] h-[207px]  flex flex-wrap text-gray mt-4 text-center justify-evenly ">

                
               {bestCuisines.map((cuisine,index) =>(
                //    console.log(index)
                    ((index<=10) && <div className="p-4 w-[260.78px] h-[53px] border border-gray rounded-xl text-[15px] " key={cuisine.text} >{cuisine.text}</div>) 
                
               )
                )}

                <div className="p-4 w-[260.78px] h-[53px] border border-gray rounded-xl font-bold " >More ...</div>
                

    
            </div>

        </div>
        </div>
    ) 
};

export default BestCuisines;

