import { configureStore } from "@reduxjs/toolkit";
import hamburgerSlice from "./hamburgerSlice";
import searchSlice from "./searchSlice";


export const store= configureStore({
    reducer:{
        hamburger: hamburgerSlice,
        searchCache: searchSlice
    }
});