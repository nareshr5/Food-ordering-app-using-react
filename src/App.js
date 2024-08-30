import Body from "./components/body";
import Footer from "./components/footer";
import Header from "./components/header";
import "./index.css";

import appStore from "./utils/store";

import {Provider} from "react-redux";
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
