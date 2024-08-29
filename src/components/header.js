import logo from "../images/logo.png";
const Header = () =>{
    const headerNavigation = ["💼Swiggy corporate","🔍 Search","💰 Offers","📎 Help","🔐 Sign in","🛒 Cart"]
    return(
        <div className=" mx-3 h-20 text-black bg-slate-100 flex justify-between shadow-lg">
           
           <img className="py-3 px-3" alt="logo" src={logo} />
            
            <div>
                <ul className="flex py-6 ">
                    {headerNavigation.map((item) => (
                        <li className="px-4 mx-4 font-semibold">{item}</li>
                    ))
                    }
                </ul>
                
            </div>
            
            
        </div>
    );

};

export default Header;