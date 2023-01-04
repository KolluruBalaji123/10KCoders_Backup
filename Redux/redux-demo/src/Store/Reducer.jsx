import { combineReducers } from "redux"
import { ADD_PERSON, DELETE_PERSON } from "./ActionTypes"

//  Reducer means a business logic 
const defaultSatate={
    users:["balaji", "kolluru","guntur","karnataka"] ,
   persons:[{
    fname:"balaji",
    lname:"kolluru",
    email:"kollurubalaji10@gmail.com"
   }],
    products:[],
  
   }
 export const usersReducer =(state = defaultSatate, action)=>{
    switch (action.type){
      case "ADD_USER":
        let newUsers=[...state.users]
        newUsers.push(action.payload)
        return {...state,users:newUsers}
        case "Delete_User":
          let UpdatedUsers =state.users.filter((user)=> user !== action.payload)
          return {...state,users:UpdatedUsers}



       
        
      default:
        return state
  
    }
    //Create a User 
    //read a User
    //delete a User
    //Update a User
  
   }
   export const personsReducer =(state = defaultSatate, action)=>{
    switch(action.type){
      case ADD_PERSON :
          let newPersons=[...state]
          newPersons.push(action.payload);
          return newPersons
          case DELETE_PERSON:
            return state.filter((person)=> person.email !== action.payload.email)
  

      default:return state.persons

    }

   }
   export const productsReducer=(state = defaultSatate, action)=>{
    switch(action.type){

      default:
        return state
    }

   }
   export const booksReducer=(state = defaultSatate, action)=>{
    switch(action.type){

default:
  return state
}

   }
   export const rootReducer=combineReducers({
    users:usersReducer,
    persons:personsReducer,
   products: personsReducer,
   books:booksReducer
   })