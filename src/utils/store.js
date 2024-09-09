import {configureStore} from "@reduxjs/toolkit";

import recommendationSliceReducer from "./recomedationSlice";
import restaurantSliceReducer from "./restaurantslice";
import helpAndSupportReducer from "./helpandsupportslice";

const appStore = configureStore({
    reducer:{
        rec:recommendationSliceReducer,
        res:restaurantSliceReducer,
        help:helpAndSupportReducer,

    },
});

export default appStore;