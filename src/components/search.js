import { useState } from "react";
import { NavLink } from "react-router-dom";


const Search = () =>{

    const [openpopup, setopenpopup] = useState(false);
    
    return(
    
        <div>
            <button onClick={()=> {
                setopenpopup(true);
                console.log("clicked")

            }}>click to open popup</button>


            {openpopup && <div className="bg-slate-400 p-2 m-3 rounded-lg popup">
                            <div className="flex flex-col justify-between">
                                <p>popup message</p>
                                <button onClick={()=>setopenpopup(false)}>X</button>
                            </div>
                            <div>
                                <p>this is the message:</p>
                                <NavLink to={"/cart"} >got to cart page</NavLink>
                            </div>
                          </div>

            }
           

        </div>);
}

export default Search;