import React from 'react'
import "./Calc.css"
import Button from "../Buttons/Button"
import Input from "../Inputs/Input"
import { useState } from 'react'
import * as math from "mathjs"


const Calculator = () => {
  const [text,setText]=useState("")
  const[result,setresult]=useState("")
  const btnclr= "#f2a33c"
  const addTotext=(val)=>{
    setText((text)=>[...text,val+""])

  }
  const  resetinput=()=>{
    setText("")
    setresult("")
  }
  const ResultOutput=()=>{
    const input= text.join("")
    setresult(math.evaluate(input))
  }
  return (
    <div className='calc'>
   <div className='calc-wrapper'>
   <Input text={text} result={result}/>
   <div className='row'>
   <Button input={"7"} handleClick={addTotext}/>
   <Button  input={"8"} handleClick={addTotext}/>
   <Button  input={"9"} handleClick={addTotext}/>
   <Button  input={"/"} color={btnclr} handleClick={addTotext}/>
   </div>
   <div className='row'>
   <Button  input={"4"} handleClick={addTotext}/>
   <Button  input={"5"} handleClick={addTotext}/>
   <Button  input={"6"} handleClick={addTotext}/>
   <Button  input={"%"}  color={btnclr} handleClick={addTotext}/>
   </div>
   <div className='row'>
   <Button  input={"1"} handleClick={addTotext}/>
   <Button  input={"2"} handleClick={addTotext}/>
   <Button  input={"3"} handleClick={addTotext}/>
   <Button  input={"+"}  color={btnclr} handleClick={addTotext}/>
   </div>
   <div className='row'>
   <Button input={"0"} handleClick={addTotext}/>
   <Button  input={"."} handleClick={addTotext}/>
   <Button  input={"="} handleClick={ResultOutput} />
   <Button  input={"-"}  color={btnclr} handleClick={addTotext}/>
   </div>
   <Button input={"clear"} color={"red"} handleClick={resetinput}/>

   </div>
    </div>
  )
}

export default Calculator