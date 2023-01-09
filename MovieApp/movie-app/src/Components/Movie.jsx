import React from 'react'
import { useState } from 'react'

const Movie = () => {
    const [search,setSearch]=useState('')
    const submitHandler=(e)=>{
        e.preventDefault();
        // console.log(search)
        fetch("http://localhost:3050/movies? s=${search}").then((response)=>{
            return response.json();
        }).then(data => console.log(data))
    }
    const handleChange=(e)=>{
        setSearch(e.target.value)
    }
  return (
    <div>
    <form >
    <input type="text" value={search} onChange={(e)=>{handleChange(e)}} /><br/><br/>
   <button type='button' onClick={submitHandler} value="search">Search</button>
    

    </form>
    </div>
  )
}

export default Movie