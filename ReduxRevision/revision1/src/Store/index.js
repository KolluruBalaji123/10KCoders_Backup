import {configureStore}from "@reduxjs/toolkit"
import { productsReducer } from "./reducers/productsReducer";
import { usersReducer } from "./reducers/UsersReducer"
import thunk from "redux-thunk"

export const store =configureStore({
    reducer:{
        users:usersReducer,
        products:productsReducer
    },
    middleware:[thunk]
    
});