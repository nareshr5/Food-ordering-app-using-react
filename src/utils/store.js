import {configureStore} from "@reduxjs/toolkit";

import recommendationSliceReducer from "./recomedationSlice";
import restaurantSliceReducer from "./restaurantslice";
import helpAndSupportReducer from "./helpandsupportslice";
import userReducer from "./userslice";
import Whatsonminditemspecificreducer from "../components/whatsonminditemspecific";
import paymentReducer from "./paymentslice";


const appStore = configureStore({
    reducer:{
        rec:recommendationSliceReducer,
        res:restaurantSliceReducer,
        help:helpAndSupportReducer,
        user:userReducer,
        Whatsonminditemspecific:Whatsonminditemspecificreducer,
        payment:paymentReducer,
     
    },
});

export default appStore;