import { useState } from "react"

export  function User(){
    const [message,setMessage]= useState("welcome to user Component ")
    console.log(useState("welcome to user Component"))
    return <div>
    <h2>{message}</h2>
    <button type="button" onClick={()=>{setMessage("welcome to updated user  changed by setmessage")}}>getuser</button>
    </div>
   
}
export function Person(){
    const [message1,setMessage1]=useState("welcome to person Component")
    return <div>
         <h2>{message1}</h2>
         <button type="button" onClick={()=>{setMessage1("updated person change dby set Message1")}}>getperson</button>
    </div>

}