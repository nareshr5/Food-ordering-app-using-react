import { useEffect , useState} from "react";
import {whatsonmindcontent_api} from "../utils/constant";


const Whatsonmindcontent = () => {

    const [list,setList] = useState([]);

    useEffect(()=>{
        // console.log("loaded");
        getData();

    },[]);

    const getData = async () =>{
        const data = await fetch(whatsonmindcontent_api);
        const jsonValue = await data.json();
        const result = jsonValue?.data?.cards;
        
        setList(result);
        
    }

    // console.log(list);

    if(list.length==0) return null;
   

    return(
        <div className="mx-3">
        
            <div className="text-3xl font-semibold my-2">{list[0].card.card.title}</div>
            <div className=" my-4 text-slate-500">{list[0].card.card.description}</div>
        </div>
    )
}

export default Whatsonmindcontent;