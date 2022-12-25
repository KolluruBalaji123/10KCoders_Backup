import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Address1 from './Address1'

const Address = () => {
    const [Address,setAddress]=useState([])
    useEffect(()=>{
        getAllAddress();
    },[])
    const  getAllAddress= async ()=>{
      const data= await (await fetch("http://localhost:3201/Address")).json();
      // console.log(data)
      setAddress(data)

  }
  return (
    <div>
       <table className="table  mt-3">
        <thead>
          <tr>
            <th>id</th>
            <th>street</th>
            <th>Empty</th>
            <th>city</th>
            <th>state</th>
            <th>zipcode</th>
            <th>Country</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
    {Address.map((adr,i)=> <Address1 myadr={adr} key={i}/>)}
       
        </tbody>
      </table>


    </div>
  )
}

export default Address