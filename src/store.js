import {configureStore} from "@reduxjs/toolkit";
import worlds from "./reducers/world";

const store = configureStore({
    reducer:{
        worlds: worlds,
    }
})

export default store;