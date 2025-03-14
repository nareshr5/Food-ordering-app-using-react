import { useEffect, useState } from "react"

const useOnlineStatus = () =>{

    const [status , setStatus] = useState(true);

    useEffect(()=>{
        fetchStatus();
    },[]);

    const fetchStatus=() =>{

        window.addEventListener("online",()=>{
            setStatus(true)
        });

        window.addEventListener("offline",()=>{
            setStatus(false);
        });

    }

    console.log(status);

    return status;
}

export default useOnlineStatus;

