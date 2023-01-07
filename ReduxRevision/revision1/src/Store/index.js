import {configureStore}from "@reduxjs/toolkit"
import { productsReducer } from "./reducers/productsReducer";
import { usersReducer } from "./reducers/UsersReducer"

export const store =configureStore({
    reducer:{
        users:usersReducer,
        products:productsReducer
    }
});