
import Footer from "./components/footer";


import "./index.css";

import Body from './components/body';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/maincontainer";
import RestaurantMenu from "../src/components/restaurantmenu";
import HelpAndSupport from "./components/helpandsupport";
import SwiggyCorporate from "./components/swiggycorporate";
import Search from "./components/search";
import SignIn from "./components/signin";
import Cart from "./components/cart";
import Offers from "./components/offers";
import ErrorPage from "./components/error";
import Header from './components/header';
import { Provider } from 'react-redux';
import appStore from './utils/store';
import Payment from "./components/payment";
import OrderSummary from "./components/ordersummary";
import WhatsOnMind from "./components/whatsonmind";
import Whatsonmindcontent from "./components/whatsonmindcontent";
import Shimmer from "./components/shimmer";



const appRouter = createBrowserRouter([
  {
     path:"/",
     element:<Body/>,
     children:[{
        path:"/",
        element:<MainContainer/>,
        
     },
     {
        path:"/restaurantmenu/:resId",
        element:<RestaurantMenu/>
     },

     {
      path:"/whatsonmindcontent/:collection_id",
      element:<Whatsonmindcontent />
     },

     {
      path:"/Cart",
      element:<Cart/>
     },
     {
      path:"/payment",
      element:<Payment/>
     },
     {
      path:"/summary",
      element:<OrderSummary/>
     },
     ],
     errorElement:<ErrorPage/>
  },
  {
     path:"/Help",
     element:<HelpAndSupport/>
  },
  {
     path:"/Signin",
     element:<SignIn/>
  },
  {
     path:"/Search",
     element:<Search/>
  },
  {
     path:"/Corporate",
     element:<SwiggyCorporate/>
  },
  {
     path:"/Offers",
     element:<Offers/>
  },
  
  {
   path:"/shimmer",
   element:<Shimmer/>
  }
]);


function App() {
  return (
        <Provider store={appStore}>
          <div>
            {/* <Header/> */}
           <RouterProvider router={appRouter}/>
          </div>
        </Provider>
        
  );
}

export default App;
