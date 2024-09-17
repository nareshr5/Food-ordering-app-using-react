import MainContainer from "./maincontainer";
import ResturantPage from "./restaurantpage";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

const Body = () =>{

    return(
        
        <div>
          <Outlet/>   
          <Footer/>
        </div>
    );
};

export default Body;