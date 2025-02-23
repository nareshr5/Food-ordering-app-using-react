// import MainContainer from "./maincontainer";
// import ResturantPage from "./restaurantpage";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

import {useEffect} from "react";
import {onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userslice";
import { useNavigate } from "react-router-dom";
import Header from "./header";
const Body = () =>{
  const dispatch  = useDispatch();
  const navigate = useNavigate();

  //  useEffect(()=>{

      // this "onAuthStateChanged" will be called whenever the user --> signin/signup  or signout <-- , we can handle the dispatch function for all of them from here itself , instead of doing it in 3 places seperately

    
  //     onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //         // the below code will be executed when a user sign up or sign in
  //         //const uid = user.uid;
  //         const {uid,email,displayName,photoURL}=user;

  //         dispatch(addUser({
  //           uid:uid,
  //           email:email,
  //           displayName:displayName,
  //           photoURL:photoURL,
  //         })

  //       );

  //       navigate("/");

  //       }
  //      else {
  //         dispatch(removeUser());

  //         navigate("/signin");
          
  //       }
  //     });

  //  },[]);

    return(

        <>
          <Header/>
          <Outlet/>   
          <Footer/>
        </>
    );
};

export default Body;