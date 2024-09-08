import Body from "./components/body";
import Footer from "./components/footer";
import Header from "./components/header";

import "./index.css";

import appStore from "./utils/store";

import {Provider} from "react-redux";

import { createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/maincontainer";
import RestaurantPage from "../src/components/restaurantpage";
import { RouterProvider } from "react-router-dom";
import HelpAndSupport from "./components/helpandsupport";
import SwiggyCorporate from "./components/swiggycorporate";
import Search from "./components/search";
import SignIn from "./components/signin";
import Cart from "./components/cart";
import Offers from "./components/offers";


const appRouter = createBrowserRouter([{

    path:"/",
    element:<Body/>,
    children:[
      {
          path:"",
          element:<MainContainer/>
     },
     {
      path:"restaurantpage",
      element:<RestaurantPage/>

     }
  ]

},
{
  path:"help",
  element:<HelpAndSupport/>
},
{
  path:"swiggycorporate",
  element:<SwiggyCorporate/>
},
{
 path:"search",
 element:<Search/>

},
{
  path:"signin",
  element:<SignIn/>
},
{
  path:"cart",
  element:<Cart/>
},
{
  path:"offers",
  element:<Offers/>
}

]);


function App() {
  return (
        <Provider store={appStore}>
          <div>
            <Header/>
            <RouterProvider  router={appRouter}/>
            <Footer/>
          </div>
        </Provider>
        
  );
}

export default App;
