
import { configureStore, } from "@reduxjs/toolkit"
import usersReducer from "./slices/UsersSlice"


export const store=configureStore({
    reducer:{
        users:usersReducer

    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:false,
    })
})