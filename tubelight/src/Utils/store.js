import { configureStore } from "@reduxjs/toolkit";
import hamburgerSlice from "./hamburgerSlice";


export const store= configureStore({
    reducer:{
        hamburger: hamburgerSlice,
    }
});