import Body from "./components/body";
import Footer from "./components/footer";
import Header from "./components/header";

import "./index.css";

import appStore from "./utils/store";

import {Provider} from "react-redux";

import { createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/maincontainer";
import RestaurantPage from "../src/components/restaurantpage";


const appRouter = createBrowserRouter([{

    // path:"/",
    // element:<Body/>,
  //   children:[
  //     {
  //         path:"/",
  //         element:<MainContainer/>
  //    },
  //    {
  //     path:"/restaurantpage",
  //     element:<RestaurantPage/>

  //    }
  // ]

},

]);


function App() {
  return (
        <Provider store={appStore}>
          <div>
            <Header/>
            <Body/>
            <Footer/>
          </div>
        </Provider>
        
  );
}

export default App;
