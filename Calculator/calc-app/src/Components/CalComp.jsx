import React from 'react'
import { useState } from 'react'
import "./style.css"

const CalComp = () => {
    const[calc,setCalc]=useState("");
    const [result,setresult]=useState(0)
    const handleChange=(e)=>{
        setCalc(e.target.value)

    }
  return (
    <div>
   
    <input type="text" value={calc} name="calc" onChange={handleChange} />
    <br/>
    <button type='button'onClick={()=> setresult(eval(calc))}>Result</button>
    <h4 id='result'>Result is :{result}</h4>
    <div className='container'>
    <div className="buttons">
        <div className="row">
            <button onClick={()=> setCalc(calc+"")}>C</button>
            <button  onClick={()=> setCalc(calc+"")}>DEL</button>
            <button  onClick={()=> setCalc(calc+"+")}>+</button>
            <button  onClick={()=> setCalc(calc+"%")}>%</button>
        </div>
        <div className="row">
            <button  onClick={()=> setCalc(calc+"7")}>7</button>
            <button  onClick={()=> setCalc(calc+"8")}>8</button>
            <button  onClick={()=> setCalc(calc+"9")}>9</button>
            <button  onClick={()=> setCalc(calc+"")}>/</button>
        </div>
        <div className="row">
            <button  onClick={()=> setCalc(calc+"4")}>4</button>
            <button  onClick={()=> setCalc(calc+"5")}>5</button>
            <button onClick={()=> setCalc(calc+"6")}>6</button>
            <button  onClick={()=> setCalc(calc+"*")}>*</button>
        </div>
        <div className="row">
            <button  onClick={()=> setCalc(calc+"1")}>1</button>
            <button  onClick={()=> setCalc(calc+"2")}>2</button>
            <button  onClick={()=> setCalc(calc+"3")}>3</button>
            <button  onClick={()=> setCalc(calc+"-")}>-</button>
        </div>
        <div className="row">
            <button onClick={()=> setCalc(calc+"")}  id="dot">.</button>
            <button  onClick={()=> setCalc(calc+"0")}>0</button>
            <button  onClick={()=> setCalc(calc+"")}id="equal">=</button>
        </div>
    </div>

    </div>
    </div>
  )
}

export default CalComp