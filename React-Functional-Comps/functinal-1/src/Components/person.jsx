import { useState } from "react"

export const Prson=()=>{
    //useState will give you an array
    //we are going to dStructure an array
  const [Person,setPerson]= useState({fname:"Balu",lname:"Kolluru",email:"kolluru@balaji.com"})
  const ChangePersonDetails=()=>{
    // console.log("ChangePersonDetails")
    // setPerson({...Person,lname:"subbu"})
    let newperson={...Person}
    newperson['lname']="Subbu"
    setPerson(newperson)
  }
    return <div>
        hello hii this is Balaji 10k coders
        <table className="table" >
        <thead>
        <tr>
        <th>firstName</th>
            <th>LastName</th>
            <th>Email</th>
        </tr> 
        </thead>
        <tbody>
        <tr>
          <td> {Person.fname}</td>
          <td> {Person.lname}</td>
          <td> {Person.email}</td>
          </tr>
        </tbody>

      </table>
        <button type="button" onClick={ChangePersonDetails}>changeDetails</button>
    </div>

}