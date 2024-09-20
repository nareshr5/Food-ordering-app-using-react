import {configureStore} from "@reduxjs/toolkit";

import recommendationSliceReducer from "./recomedationSlice";
import restaurantSliceReducer from "./restaurantslice";
import helpAndSupportReducer from "./helpandsupportslice";
import userReducer from "./userslice";

const appStore = configureStore({
    reducer:{
        rec:recommendationSliceReducer,
        res:restaurantSliceReducer,
        help:helpAndSupportReducer,
        user:userReducer,

    },
});

export default appStore;