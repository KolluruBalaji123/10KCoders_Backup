import { GET_USERS } from "../Actions/ActionTypes"
import { defaultState } from "../defalutState"

export const userReducer=(state=defaultState,action)=>{
    switch(action.type){
        case GET_USERS:
            return {...state,users:action.payload}

        default: return state


    }
}