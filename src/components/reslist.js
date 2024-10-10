import ResCard from "./rescard";
import { useSelector } from "react-redux";


const ResList = (props) =>{
    const {title,type}=props;

    const {resList,resWithOnlineDelivery} = useSelector((store) => store.res);

    if(!resList) return null;
    if(!resWithOnlineDelivery) return null;


    if(type==="top restaurants")return(
        <div className="p-4 w-[1007px] h-[380px] m-auto">
            <div className="mb-4 text-2xl font-bold">{title}</div>
            <div className="flex  pl-4 ">
            {resList.map((res)=> (
                
                    <ResCard resList={res} type={type} key={res}/>
                 
            )
            
            )}
            </div>
            
        </div>
    );

    if(type==="online delivery")return(
        <div className=" w-[1007.2px] h-[592.6px] m-auto">
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