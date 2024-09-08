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
