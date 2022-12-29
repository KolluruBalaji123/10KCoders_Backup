
import { useAuth } from "./Auth"
import {useNavigate} from "react-router-dom"

export const RequiredAuth=({children})=>{
    const navigate=useNavigate()
    console.log({children})
    const auth=useAuth();
    const handleLogin=()=>{
       navigate("/")
    }
    if(!auth.user){
        return <>
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
            <p style={{color:"red"}}>please login to view the products</p>
        </>
    }
    return children

}