import { NavLink } from "react-router-dom";
import logo from "../images/logos.png";

//import { Link } from "react-router-dom";
const Header = () =>{
    //const headerNavigation = ["💼Swiggy corporate","🔍 Search","💰 Offers","📎 Help","🔐 Sign in","🛒 Cart"]
    const headerNavigation = ["Corporate","Search","Offers","Help","Signin","Cart"]
    return(
        <div className=" mx-3 h-20 text-black bg-slate-100 flex justify-between shadow-lg">
           
           <img className=" p-2 width-[70%] height-[30%] rounded-1xl" alt="logo" src={logo} />
            
            <div>
                <ul className="flex py-6 cursor-pointer ">
                    {headerNavigation.map((item,index) => (
                       //<Link to={item}><li className="px-4 mx-4 font-semibold" key={index}>{item}</li> </Link>

                        // <a href={"/"+item}>
                        //   <li className="px-4 mx-4 font-semibold" key={index}>{item}</li> 
                        // </a>

                        <NavLink to={"/"+item}>
                         <li className="px-4 mx-4 font-semibold" key={index}>{item}</li> 
                        </NavLink>

                    ))
                    }

            
                    
                </ul>
                
            </div>
            
            
        </div>
    );

};

export default Header;