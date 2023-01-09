import "./Button.css"
import React from 'react'

const Button = ({input,color,handleClick}) => {

  return (
    <div className="button-wrapper"  style={{backgroundColor:color}} onClick={()=>handleClick(input)}>
  {input}
    </div>
  )
}

export default Button