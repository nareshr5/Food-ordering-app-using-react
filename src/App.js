import Body from "./components/body";
import Footer from "./components/footer";
import Header from "./components/header";
import "./index.css";

function App() {
  return (
    <div className="App"> 
      {/* <h1 className="shadow-lg bg-green-700">Hello world</h1> */}
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
