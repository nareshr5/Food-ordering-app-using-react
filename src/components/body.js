import MainContainer from "./maincontainer";
import ResturantPage from "./restaurantpage";
import { Outlet } from "react-router-dom";

const Body = () =>{

    return(
        
        <div>
          <Outlet/>     
        </div>
    );
};

export default Body;