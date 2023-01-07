import { configureStore} from "@reduxjs/toolkit"//itr is  standlone library it can accress many coding  languages
import { rootReducer } from "./Reducer"
import {composeWithDevTools} from  "@redux-devtools/extension"

export const store =configureStore({
    reducer:rootReducer,devTools:true
})