import { Navigate } from "react-router-dom"
import { useAuth } from "./Auth"

export const RequiredAuth=({children})=>{
    console.log({children})
    const auth=useAuth()
    if(!auth.user){
        return <Navigate to ={"/"}/>
    }
    return children

}