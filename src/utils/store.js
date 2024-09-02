import {configureStore} from "@reduxjs/toolkit";

import recommendationSliceReducer from "./recomedationSlice";
import restaurantSliceReducer from "./restaurantslice";

const appStore = configureStore({
    reducer:{
        rec:recommendationSliceReducer,
        res:restaurantSliceReducer,

    },
});

export default appStore;