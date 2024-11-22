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
        
        setList({result});
        console.log(list);
    }

    return(
        <div>on whats on  mind content page</div>
    )
}

export default Whatsonmindcontent;