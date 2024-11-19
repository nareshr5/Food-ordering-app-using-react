
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
// import Whatsonminditemspecific from "./components/whatsonminditemspecific";



const appRouter = createBrowserRouter([
  {
     path:"/",
     element:<Body/>,
     children:[{
        path:"/",
        element:<MainContainer/>,
        
     },
     {
        path:"/restaurantmenu",
        element:<RestaurantMenu/>
     },
   //   {
   //    path:"/whatsonminditemspecific",
   //    element:<Whatsonminditemspecific />
   //   },
     ],
     errorElement:<ErrorPage/>
  },
  {
     path:"/help",
     element:<HelpAndSupport/>
  },
  {
     path:"/signin",
     element:<SignIn/>
  },
  {
     path:"/search",
     element:<Search/>
  },
  {
     path:"/swiggycorporate",
     element:<SwiggyCorporate/>
  },
  {
     path:"/offers",
     element:<Offers/>
  },
  {
     path:"/cart",
     element:<Cart/>
  },
  {
   path:"/payment",
   element:<Payment/>
  },
  {
   path:"/summary",
   element:<OrderSummary/>
  }
]);


function App() {
  return (
        <Provider store={appStore}>
          <div>
            <Header/>
           <RouterProvider router={appRouter}/>
          </div>
        </Provider>
        
  );
}

export default App;
