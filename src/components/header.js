import logo from "../images/logo.png";
import { Link } from "react-router-dom";
const Header = () =>{
    //const headerNavigation = ["💼Swiggy corporate","🔍 Search","💰 Offers","📎 Help","🔐 Sign in","🛒 Cart"]
    const headerNavigation = ["Swiggy corporate","Search","Offers","Help","Sign in","Cart"]
    return(
        <div className=" mx-3 h-20 text-black bg-slate-100 flex justify-between shadow-lg">
           
           <img className="py-3 px-3" alt="logo" src={logo} />
            
            <div>
                <ul className="flex py-6 ">
                    {headerNavigation.map((item,index) => (
                       //<Link to={item}><li className="px-4 mx-4 font-semibold" key={index}>{item}</li> </Link>
                        <li className="px-4 mx-4 font-semibold" key={index}>{item}</li> 
                    ))
                    }
                    
                </ul>
                
            </div>
            
            
        </div>
    );

};

export default Header;