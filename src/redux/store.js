import { configureStore } from "@reduxjs/toolkit";
import  restaurantData  from "./restaurantSlice";



const store =configureStore({
    reducer:{
        restaurantStore:restaurantData
    }
});
export default store;