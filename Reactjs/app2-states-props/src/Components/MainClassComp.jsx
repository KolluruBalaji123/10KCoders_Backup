import { Component } from "react";

export class MainClassComponent extends Component{
    constructor(){
        super()//it is not mandatory
       this.state={
        fname:"Balaji",
       person:{
        fname:"Balaji",
        lname:"Kolluru",
        email:"kolluruBalaji10@gmail.com",
        city:"Guntur"
       },
       friends:["Balu","Pavani","Nikhil"]
       }
    }
    render(){
        return <>
    <h2>Welcome to the Course {this.state.person.fname+this.state.person.lname}</h2>
    <ul>
        <h2>This is Object</h2>
        {/* <li>{this.state.person.fname}</li>
        <li>{this.state.person.lname}</li>
        <li>{this.state.person.email}</li> */}
        {Object.values(this.state.person).map((val1)=>{
            return <li>{val1}</li>
        })}

    </ul>
    <h2>This is Array</h2>
    <ul>
        {/* <li>{this.state.friends[0]}</li>
        <li>{this.state.friends[1]}</li> */}
        {this.state.friends.map((val,i)=>{
            return <li key={i}>{val}</li>
        })}
    </ul>
        </>
    }
}
//JSX supports HTML intelligencwe
