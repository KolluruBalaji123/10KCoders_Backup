import {configureStore} from "@reduxjs/toolkit"
import { userReducer } from "./Reducers/usersReducers"
import thunk from "redux-thunk"


export const store =configureStore({
    reducer:userReducer,
    devTools:true,
    middleware:[thunk]

})